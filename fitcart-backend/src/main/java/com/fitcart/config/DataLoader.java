package com.fitcart.config;

import com.fitcart.entity.Product;
import com.fitcart.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner seedProducts(ProductRepository repo) {
        return args -> {
            if (repo.count() > 0) {
                return;
            }

            repo.save(new Product(null, "Whey Protein Gold Standard", "High-quality whey protein for muscle growth and recovery", 2499.0, 40, "Supplements", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Creatine Monohydrate", "Boost strength and performance during high-intensity training", 1299.0, 35, "Supplements", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Premium Yoga Mat", "Anti-slip textured yoga mat with extra cushioning", 899.0, 60, "Yoga", "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Adjustable Dumbbell Set", "Compact adjustable dumbbells for progressive training", 5499.0, 15, "Equipment", "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Resistance Bands Kit", "Versatile mobility and strength bands with door anchor", 799.0, 50, "Accessories", "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Smart Skipping Rope", "Tracks reps and calories with ergonomic handles", 1199.0, 70, "Cardio", "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Exercise Bike", "Indoor cycling bike for cardio training", 15999.0, 8, "Cardio", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Foam Roller", "Muscle recovery roller for warmup and cooldown", 699.0, 45, "Accessories", "https://images.unsplash.com/photo-1599058918054-0c3d43c2fa2a?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Gym Gloves", "Comfortable grip gloves for training sessions", 299.0, 120, "Accessories", "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop"));
            repo.save(new Product(null, "Pull-Up Bar", "Wall-mounted pull-up bar for upper-body workouts", 1999.0, 20, "Equipment", "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop"));
        };
    }
}
