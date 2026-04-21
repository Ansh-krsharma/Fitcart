# 🛒 FitCart – Full Stack E-Commerce Web Application

FitCart is a full-stack e-commerce platform designed for selling fitness-related products such as supplements, gym equipment, and accessories.
It demonstrates modern web development using a layered architecture with secure authentication and real-time data interaction.

---

## 🚀 Tech Stack

### 🔹 Backend

* Java + Spring Boot
* Spring Data JPA (Hibernate)
* Spring Security + JWT Authentication
* RESTful APIs

### 🔹 Frontend

* React.js
* React Router
* Axios
* HTML, CSS

### 🔹 Database

* MySQL

---

## ✨ Features

### 👤 User Features

* User Registration & Login (JWT Auth)
* Browse Products
* Add to Cart
* Update Cart Quantity
* Checkout & Place Orders
* View Order History

### 🛠 Admin Features

* Admin Dashboard
* Add / Update / Delete Products
* View All Orders
* Manage Inventory

---

## 🏗️ Project Architecture

Frontend (React) ⇄ Backend (Spring Boot REST APIs) ⇄ Database (MySQL)

### Backend Layers:

* Controller Layer
* Service Layer
* Repository Layer
* Entity Layer

---

## 📂 Project Structure

### Backend

```
fitcart-backend/
 ├── controller/
 ├── service/
 ├── repository/
 ├── entity/
 ├── config/
 └── application.properties
```

### Frontend

```
fitcart-frontend/
 ├── components/
 ├── pages/
 ├── services/
 ├── context/
 └── App.jsx
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/fitcart.git
cd fitcart
```

---

### 🔹 2. Backend Setup

```bash
cd fitcart-backend
mvn clean install
mvn spring-boot:run
```

Update database config in:

```
src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fitcart
spring.datasource.username=root
spring.datasource.password=yourpassword
```

---

### 🔹 3. Frontend Setup

```bash
cd fitcart-frontend
npm install
npm run dev
```

---

## 🗄️ Database Setup

```sql
CREATE DATABASE fitcart;
```

(Optional) Add sample products with images.

---

## 🔐 Admin Access

After registering a user, make them admin:

```sql
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

---

⭐ If you like this project, give it a star!
