package com.fitcart.controller;

import com.fitcart.dto.CheckoutRequest;
import com.fitcart.entity.Order;
import com.fitcart.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    @Autowired private OrderService orderService;

    @PostMapping("/checkout")
    public Order checkout(@Valid @RequestBody CheckoutRequest request, Authentication auth) {
        return orderService.checkout(auth.getName(), request.getAddress());
    }

    @GetMapping("/my")
    public List<Order> myOrders(Authentication auth) {
        return orderService.getUserOrders(auth.getName());
    }
}
