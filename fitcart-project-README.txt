FITCART PROJECT ZIP CONTENTS

1) fitcart-backend
   - Spring Boot + JWT + MySQL backend
2) fitcart-frontend
   - React + Vite frontend

WHAT WAS ADDED IN THIS ENHANCED ZIP
- More seeded sample products
- Search box on home page
- Category filter on home page
- Update quantity in cart (+ / -)
- Admin product edit support
- Admin order status update
- Cleaner API validation and error responses

HOW TO RUN

A. MySQL
- Create database named: fitcart
- Update username/password inside:
  fitcart-backend/src/main/resources/application.properties

B. Backend
- Open fitcart-backend
- Run:
  mvn clean install
  mvn spring-boot:run

C. Frontend
- Open fitcart-frontend
- Run:
  npm install
  npm run dev

ADMIN SETUP
- Register a normal user first from frontend
- Then make that user admin in MySQL:
  UPDATE users SET role = 'ROLE_ADMIN' WHERE email = 'your-email@example.com';

MAIN FEATURES
- JWT login/register
- Product listing with seeded products
- Search and category filter
- Add to cart
- Update cart quantity
- Remove from cart
- Checkout/order creation
- Order history
- Admin dashboard
- Admin product add/edit/delete
- Admin order status update
