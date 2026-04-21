🛒 FitCart – Full Stack Fitness E-Commerce Platform

FitCart is a full-stack e-commerce web application designed for fitness products like supplements, equipment, and accessories.
It includes user authentication, admin dashboard, cart & order system, and a modern UI similar to Flipkart/Amazon.

🚀 Features
👤 User Features
User Registration & Login (JWT Authentication)
Browse Products with Filters & Search
Add to Cart & Manage Cart
Place Orders
View Order History
🛠️ Admin Features
Admin Dashboard
Add / Update / Delete Products
Manage Orders
View Users
🎨 UI Features
Premium modern UI
Sidebar Filters (Category, Search, Sort)
Responsive design (mobile-friendly)
Clean product cards with images
🧰 Tech Stack
Frontend
React.js
Axios
CSS / Tailwind (depending on version)
Backend
Spring Boot
Spring Security (JWT Authentication)
Hibernate (JPA)
Database
MySQL
📁 Project Structure
FitCart/
│
├── fitcart-frontend/   # React Frontend
├── fitcart-backend/    # Spring Boot Backend
└── README.md
⚙️ Setup Instructions
🔹 1. Clone Project
git clone https://github.com/your-username/fitcart.git
cd fitcart
🔹 2. Setup MySQL

Create database:

CREATE DATABASE fitcart;
🔹 3. Configure Backend

Open:

fitcart-backend/src/main/resources/application.properties

Update:

spring.datasource.url=jdbc:mysql://localhost:3306/fitcart
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
server.port=8080
🔹 4. Run Backend
cd fitcart-backend
mvn clean
mvn spring-boot:run

Backend runs at:

http://localhost:8080
🔹 5. Run Frontend
cd fitcart-frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173
📦 Sample Products (Optional)

Run this SQL to insert products:

INSERT INTO product (name, description, price, quantity, category, image_url)
VALUES ('Whey Protein', 'High-quality protein', 2499, 50, 'Supplements', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438');
🔐 Admin Access
Register a user from frontend
Open MySQL and run:
UPDATE users
SET role = 'ROLE_ADMIN'
WHERE email = 'your-email@example.com';
```

---

## 📸 Screenshots (Optional)

* Home Page
* Product Listing
* Cart Page
* Admin Dashboard

(Add screenshots here for better GitHub appearance)

---

## 🧪 Testing

* API testing using Postman
* Unit testing using JUnit
* Functional testing for user flows

---

## 🚀 Future Enhancements

* Payment Gateway Integration
* Product Reviews & Ratings
* Search & Filters
* Image Upload System (Cloudinary)
* Responsive UI improvements

---

## 📌 Conclusion

FitCart demonstrates a complete full-stack e-commerce system with secure authentication, modular design, and real-world application features. It is suitable for learning, academic submission, and portfolio projects.

---

## 👨‍💻 Author

Ansh kumar sharma
GitHub: https://github.com/your-username

⭐ If you like this project

Give it a ⭐ on GitHub!