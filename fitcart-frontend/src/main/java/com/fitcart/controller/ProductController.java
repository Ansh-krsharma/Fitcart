package com.fitcart.controller;

import com.fitcart.entity.Product;
import com.fitcart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired private ProductService productService;

    @GetMapping
    public List<Product> getAll(@RequestParam(required = false) String q,
                                @RequestParam(required = false) String category) {
        return productService.search(q, category);
    }

    @GetMapping("/categories")
    public Set<String> categories() {
        return productService.getCategories();
    }

    @GetMapping("/{id}")
    public Product getOne(@PathVariable Long id) {
        return productService.getById(id);
    }
}
