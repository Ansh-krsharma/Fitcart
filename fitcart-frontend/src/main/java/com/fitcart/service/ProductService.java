package com.fitcart.service;

import com.fitcart.entity.Product;
import com.fitcart.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Service
public class ProductService {
    @Autowired private ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public List<Product> search(String q, String category) {
        boolean hasQ = q != null && !q.isBlank();
        boolean hasCategory = category != null && !category.isBlank();

        if (hasQ && hasCategory) {
            return productRepository
                    .findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrCategoryContainingIgnoreCase(q, q, q)
                    .stream()
                    .filter(p -> p.getCategory() != null && p.getCategory().equalsIgnoreCase(category))
                    .toList();
        }
        if (hasQ) {
            return productRepository.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrCategoryContainingIgnoreCase(q, q, q);
        }
        if (hasCategory) {
            return productRepository.findByCategoryIgnoreCase(category);
        }
        return getAll();
    }

    public Set<String> getCategories() {
        return new LinkedHashSet<>(productRepository.findAll().stream()
                .map(Product::getCategory)
                .filter(c -> c != null && !c.isBlank())
                .sorted(Comparator.naturalOrder())
                .toList());
    }

    public Product getById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public Product save(Product p) {
        return productRepository.save(p);
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
