package com.fitcart.service;

import com.fitcart.config.JwtService;
import com.fitcart.dto.*;
import com.fitcart.entity.Cart;
import com.fitcart.entity.User;
import com.fitcart.repository.CartRepository;
import com.fitcart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired private UserRepository userRepository;
    @Autowired private CartRepository cartRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtService jwtService;
    @Autowired private AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        userRepository.findByEmail(request.getEmail()).ifPresent(u -> {
            throw new RuntimeException("Email already registered");
        });

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("ROLE_USER");
        userRepository.save(user);

        Cart cart = new Cart();
        cart.setUser(user);
        cartRepository.save(cart);

        String token = jwtService.generateToken(user.getEmail(), user.getRole());
        return new AuthResponse(token, user.getRole(), user.getEmail());
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.generateToken(user.getEmail(), user.getRole());
        return new AuthResponse(token, user.getRole(), user.getEmail());
    }
}
