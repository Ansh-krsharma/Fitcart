# 🛒 FitCart – Full Stack Fitness E-Commerce Platform

FitCart is a **full-stack e-commerce web application** designed for fitness products like supplements, equipment, and accessories.
It includes **user authentication, admin dashboard, cart & order system**, and a modern UI similar to Flipkart/Amazon.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login (JWT Authentication)
* Browse Products with Filters & Search
* Add to Cart & Manage Cart
* Place Orders
* View Order History

### 🛠️ Admin Features

* Admin Dashboard
* Add / Update / Delete Products
* Manage Orders
* View Users

### 🎨 UI Features

* Premium modern UI
* Sidebar Filters (Category, Search, Sort)
* Responsive design (mobile-friendly)
* Clean product cards with images

---

## 🧰 Tech Stack

### Frontend

* React.js
* Axios
* CSS / Tailwind (depending on version)

### Backend

* Spring Boot
* Spring Security (JWT Authentication)
* Hibernate (JPA)

### Database

* MySQL

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

### 🔹 1. Clone Project

```
git clone https://github.com/your-username/fitcart.git
cd fitcart
```

---

### 🔹 2. Setup MySQL

"Refer to MYSQL_SETUP.txt"

Create database:

```
CREATE DATABASE fitcart;
```

---

### 🔹 3. Configure Backend

Open:

```
fitcart-backend/src/main/resources/application.properties
```

Update:

```
spring.datasource.url=jdbc:mysql://localhost:3306/fitcart
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

```

---

### 🔹 4. Run Backend

```
cd fitcart-backend
mvn clean
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

### 🔹 5. Run Frontend

```
cd fitcart-frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📦 Sample Products (Optional)

"Refer to MYSQL_SETUP.txt"

Run this SQL to insert products:

```
INSERT INTO product (name, description, price, quantity, category, image_url)
VALUES ('Whey Protein', 'High-quality protein', 2499, 50, 'Supplements', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438');
```

---

## 🔐 Admin Access

1. Register a user from frontend
2. Open MySQL and run:

```
UPDATE users
SET role = 'ROLE_ADMIN'
WHERE email = 'your-email@example.com';
```

3. Login again → You now have admin access

---

## 🔗 API Endpoints

### Public

* `GET /api/products`
* `POST /api/auth/register`
* `POST /api/auth/login`

### Admin

* `POST /api/admin/products`
* `PUT /api/admin/products/{id}`
* `DELETE /api/admin/products/{id}`

---

## 🧪 Testing

* Use **Postman** for API testing
* Use browser DevTools → Network tab to debug requests

---

## ❗ Common Issues & Fixes

### MySQL Connection Error

```
Access denied for user 'root'
```

✔ Fix: Update correct password in `application.properties`

---

### Backend Not Starting

✔ Ensure:

* Java 17 installed
* Maven installed
* MySQL running

---

### Products Not Showing

✔ Check:

* `/api/products` returns data
* Database has rows
* Frontend API URL is correct

---

## 📸 Screenshots

### 🏠 Home Page

<p align="center">
  <img src="https://github.com/user-attachments/assets/2a77cb01-fe41-4447-b66e-b3c7534432d8" width="45%" />
  <img src="https://github.com/user-attachments/assets/54254c09-d752-4078-b531-876ebfa31a1a" width="45%" />
</p>

<p align="center">
  <b>Customer View</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Admin View</b>
</p>

---

### 🛍️ Product Listing

<p align="center">
  <img src="https://github.com/user-attachments/assets/ab32725c-5667-40dd-af93-9954c5f7ee21" width="70%" />
</p>

---

### 🛒 Cart Page

<p align="center">
  <img src="https://github.com/user-attachments/assets/1d632932-bd25-494c-9770-09cd24a76fcc" width="70%" />
</p>

---

### 📊 Admin Dashboard

<p align="center">
  <img src="https://github.com/user-attachments/assets/0d120e15-3a63-4e8c-9d4e-5ac4d9c02e5a" width="70%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/280116e8-5e46-4769-8975-7f738bb2076c" width="45%" />
  <img src="https://github.com/user-attachments/assets/bbdbc679-2e49-4751-a11e-df31dcb01dda" width="45%" />
</p>

---

## 📌 Future Improvements

* Payment Integration (Razorpay/Stripe)
* Product Reviews & Ratings
* Wishlist Feature
* Image Upload (Cloudinary)
* Advanced Filters (price range)

---

## 👨‍💻 Author

**Ansh kumar sharma**

GitHub: https://github.com/Ansh-krsharma

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
