INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Whey Protein', 'Premium whey protein powder for muscle recovery.', 2499.0, 50, 'Supplements', 'https://images.unsplash.com/photo-1579722821273-0f6c3f77f5f1?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Whey Protein');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Mass Gainer', 'High-calorie protein blend for weight gain and strength.', 2899.0, 40, 'Supplements', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Mass Gainer');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Pre Workout', 'Energy boosting pre-workout for high intensity sessions.', 1499.0, 65, 'Supplements', 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Pre Workout');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Yoga Mat', 'Non-slip yoga mat for home workouts and stretching.', 899.0, 80, 'Accessories', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Yoga Mat');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Resistance Bands', 'Set of resistance bands for mobility and strength training.', 699.0, 90, 'Accessories', 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Resistance Bands');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Shaker Bottle', 'Leak-proof shaker bottle for protein and hydration.', 399.0, 120, 'Accessories', 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Shaker Bottle');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Adjustable Dumbbells', 'Compact dumbbells for progressive strength training.', 5999.0, 20, 'Equipment', 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Adjustable Dumbbells');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Kettlebell 12kg', 'Cast iron kettlebell for functional workouts.', 1899.0, 35, 'Equipment', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Kettlebell 12kg');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Treadmill Shoes', 'Lightweight training shoes with strong grip and cushioning.', 3299.0, 45, 'Footwear', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Treadmill Shoes');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Fitness Smartwatch', 'Track heart rate, steps and calories with a fitness smartwatch.', 4999.0, 25, 'Wearables', 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Fitness Smartwatch');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Foam Roller', 'Recovery foam roller for mobility and post-workout muscle relief.', 999.0, 55, 'Recovery', 'https://images.unsplash.com/photo-1517837016564-bfc1f7b85e84?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Foam Roller');

INSERT INTO product (name, description, price, quantity, category, image_url)
SELECT * FROM (
    SELECT 'Gym Gloves', 'Padded gloves for better grip and wrist support.', 549.0, 75, 'Accessories', 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM product WHERE name = 'Gym Gloves');
