package com.fitcart.controller;

import com.fitcart.dto.CartRequest;
import com.fitcart.dto.UpdateCartItemRequest;
import com.fitcart.entity.CartItem;
import com.fitcart.service.CartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired private CartService cartService;

    @GetMapping
    public List<CartItem> getCart(Authentication auth) {
        return cartService.getCartItems(auth.getName());
    }

    @PostMapping
    public String addToCart(@Valid @RequestBody CartRequest request, Authentication auth) {
        cartService.addToCart(auth.getName(), request);
        return "Added to cart";
    }

    @PutMapping("/{itemId}")
    public CartItem updateQuantity(@PathVariable Long itemId, @Valid @RequestBody UpdateCartItemRequest request) {
        return cartService.updateQuantity(itemId, request);
    }

    @DeleteMapping("/{itemId}")
    public String removeItem(@PathVariable Long itemId) {
        cartService.removeItem(itemId);
        return "Removed";
    }
}
