package com.fitcart.service;

import com.fitcart.entity.Order;
import com.fitcart.entity.Product;
import com.fitcart.entity.User;
import com.fitcart.repository.OrderRepository;
import com.fitcart.repository.ProductRepository;
import com.fitcart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AdminService {

    @Autowired private ProductRepository productRepository;
    @Autowired private OrderRepository orderRepository;
    @Autowired private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Map<String, Object> dashboardStats() {
        List<Product> products = productRepository.findAll();
        List<Order> orders = orderRepository.findAll();
        List<User> users = userRepository.findAll();

        double revenue = orders.stream().mapToDouble(Order::getTotal).sum();

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalProducts", products.size());
        stats.put("totalOrders", orders.size());
        stats.put("totalUsers", users.size());
        stats.put("totalRevenue", revenue);
        return stats;
    }
}
