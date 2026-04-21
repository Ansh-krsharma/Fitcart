INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Whey Protein Gold Standard', 'High-quality whey protein for muscle growth and recovery', 2499, 40, 'Supplements', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Whey Protein Gold Standard');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Creatine Monohydrate', 'Boost strength and performance for high-intensity workouts', 1299, 35, 'Supplements', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Creatine Monohydrate');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Premium Yoga Mat', 'Non-slip yoga mat with extra cushioning for comfort', 899, 60, 'Yoga', 'https://images.unsplash.com/photo-1518611012118-696072aa579a'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Premium Yoga Mat');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Adjustable Dumbbells', 'Compact dumbbell set for effective home strength training', 5499, 15, 'Equipment', 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Adjustable Dumbbells');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Resistance Bands Kit', 'Stretch bands for mobility, recovery, and strength sessions', 799, 50, 'Accessories', 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Resistance Bands Kit');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Skipping Rope Smart', 'Digital skipping rope for cardio and calorie tracking', 1199, 70, 'Cardio', 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Skipping Rope Smart');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Exercise Bike', 'Indoor cycling bike for daily cardio sessions', 15999, 8, 'Cardio', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Exercise Bike');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT 'Gym Gloves', 'Comfort grip workout gloves for lifting and training', 299, 120, 'Accessories', 'https://images.unsplash.com/photo-1599058917212-d750089bc07e'
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Gym Gloves');
