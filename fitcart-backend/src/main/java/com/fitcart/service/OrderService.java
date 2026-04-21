package com.fitcart.service;

import com.fitcart.entity.*;
import com.fitcart.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    @Autowired private UserRepository userRepository;
    @Autowired private CartRepository cartRepository;
    @Autowired private CartItemRepository cartItemRepository;
    @Autowired private OrderRepository orderRepository;
    @Autowired private OrderItemRepository orderItemRepository;
    @Autowired private ProductRepository productRepository;

    public Order checkout(String email, String address) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Cart not found"));
        List<CartItem> cartItems = cartItemRepository.findByCart(cart);

        if (cartItems.isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }
        if (address == null || address.isBlank()) {
            throw new RuntimeException("Address is required");
        }

        double total = 0.0;
        for (CartItem item : cartItems) {
            Product p = item.getProduct();
            if (p.getQuantity() < item.getQuantity()) {
                throw new RuntimeException("Insufficient stock for " + p.getName());
            }
            total += p.getPrice() * item.getQuantity();
        }

        Order order = new Order();
        order.setUser(user);
        order.setAddress(address);
        order.setStatus("PLACED");
        order.setCreatedAt(LocalDateTime.now());
        order.setTotal(total);
        orderRepository.save(order);

        for (CartItem item : cartItems) {
            Product p = item.getProduct();
            p.setQuantity(p.getQuantity() - item.getQuantity());
            productRepository.save(p);

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(p);
            orderItem.setProductName(p.getName());
            orderItem.setPrice(p.getPrice());
            orderItem.setQuantity(item.getQuantity());
            orderItemRepository.save(orderItem);
        }

        cartItemRepository.deleteByCart(cart);
        return order;
    }

    public List<Order> getUserOrders(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        return orderRepository.findByUser(user);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order updateStatus(Long orderId, String status) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status.toUpperCase());
        return orderRepository.save(order);
    }
}
