package com.fitcart.controller;

import com.fitcart.dto.UpdateOrderStatusRequest;
import com.fitcart.entity.Order;
import com.fitcart.entity.Product;
import com.fitcart.service.AdminService;
import com.fitcart.service.OrderService;
import com.fitcart.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired private AdminService adminService;
    @Autowired private ProductService productService;
    @Autowired private OrderService orderService;

    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {
        return adminService.dashboardStats();
    }

    @GetMapping("/products")
    public List<Product> products() {
        return productService.getAll();
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product p) {
        return productService.save(p);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product p) {
        Product old = productService.getById(id);
        old.setName(p.getName());
        old.setDescription(p.getDescription());
        old.setPrice(p.getPrice());
        old.setQuantity(p.getQuantity());
        old.setCategory(p.getCategory());
        old.setImageUrl(p.getImageUrl());
        return productService.save(old);
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return "Product deleted";
    }

    @GetMapping("/orders")
    public List<Order> allOrders() {
        return orderService.getAllOrders();
    }

    @PutMapping("/orders/{orderId}/status")
    public Order updateOrderStatus(@PathVariable Long orderId, @Valid @RequestBody UpdateOrderStatusRequest request) {
        return orderService.updateStatus(orderId, request.getStatus());
    }
}
