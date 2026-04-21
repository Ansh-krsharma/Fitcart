package com.fitcart.repository;

import com.fitcart.entity.Cart;
import com.fitcart.entity.CartItem;
import com.fitcart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByCart(Cart cart);
    Optional<CartItem> findByCartAndProduct(Cart cart, Product product);
    void deleteByCart(Cart cart);
}
