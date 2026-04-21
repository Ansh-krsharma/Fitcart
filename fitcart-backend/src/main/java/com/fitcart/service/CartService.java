package com.fitcart.service;

import com.fitcart.dto.CartRequest;
import com.fitcart.dto.UpdateCartItemRequest;
import com.fitcart.entity.*;
import com.fitcart.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired private UserRepository userRepository;
    @Autowired private CartRepository cartRepository;
    @Autowired private ProductRepository productRepository;
    @Autowired private CartItemRepository cartItemRepository;

    public List<CartItem> getCartItems(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Cart not found"));
        return cartItemRepository.findByCart(cart);
    }

    public void addToCart(String email, CartRequest request) {
        if (request.getQuantity() == null || request.getQuantity() <= 0) {
            throw new RuntimeException("Quantity must be greater than 0");
        }

        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Cart not found"));
        Product product = productRepository.findById(request.getProductId()).orElseThrow(() -> new RuntimeException("Product not found"));

        CartItem item = cartItemRepository.findByCartAndProduct(cart, product)
                .orElse(new CartItem(null, cart, product, 0));

        int newQuantity = item.getQuantity() + request.getQuantity();
        if (newQuantity > product.getQuantity()) {
            throw new RuntimeException("Requested quantity exceeds available stock");
        }

        item.setQuantity(newQuantity);
        cartItemRepository.save(item);
    }

    public CartItem updateQuantity(Long itemId, UpdateCartItemRequest request) {
        CartItem item = cartItemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (request.getQuantity() > item.getProduct().getQuantity()) {
            throw new RuntimeException("Requested quantity exceeds available stock");
        }

        item.setQuantity(request.getQuantity());
        return cartItemRepository.save(item);
    }

    public void removeItem(Long itemId) {
        cartItemRepository.deleteById(itemId);
    }
}
