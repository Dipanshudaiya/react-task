# 📦 React Task — Project Guide

## Overview

This is a **React** frontend application built with:

| Tech              | Purpose                              |
|-------------------|--------------------------------------|
| **Vite**          | Build tool & dev server              |
| **React**         | UI library                           |
| **Tailwind CSS**  | Utility-first CSS framework          |
| **Zustand**       | Lightweight state management         |
| **React Router**  | Client-side routing                  |

---

## 🗂️ Folder Structure

```
react-task/
│
├── public/                        # Static assets
├── src/
│   ├── main.jsx                   # Entry point — render App inside BrowserRouter
│   ├── App.jsx                    # Route definitions (/, /login, /register, /cart)
│   ├── index.css                  # Tailwind CSS import + global styles
│   │
│   ├── components/                # Reusable UI components
│   │   ├── Header.jsx             # Navbar — logo, nav links, cart icon with count
│   │   ├── Hero.jsx               # Promotional banner section
│   │   ├── ProductCard.jsx        # Single product card (image, name, price, add-to-cart)
│   │   ├── Footer.jsx             # Site footer with links & copyright
│   │   └── ProtectedRoute.jsx     # Auth guard — redirects to /login if not logged in
│   │
│   ├── pages/                     # Full page views
│   │   ├── Login.jsx              # Login form (email + password)
│   │   ├── Register.jsx           # Registration form (name, email, password)
│   │   ├── Home.jsx               # Main page — Hero + Product grid
│   │   └── Cart.jsx               # Cart page — items list, total, "Book Now" button
│   │
│   ├── store/                     # Zustand state stores
│   │   ├── useAuthStore.js        # Auth state — user, login(), logout(), register()
│   │   └── useCartStore.js        # Cart state — items[], addToCart(), removeFromCart(), clearCart()
│   │
│   ├── data/                      # Static / mock data
│   │   └── products.js            # Mock product array (used until backend API is ready)
│   │
│   └── utils/                     # Helper functions
│       └── api.js                 # fetchProducts() — returns mock data now, real API later
│
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite config with React + Tailwind plugins
├── package.json                   # Dependencies & scripts
├── PROJECT_GUIDE.md               # ← You are here
└── README.md                      # Vite default readme
```

---

## 🚀 How to Run

```bash
# Install dependencies (already done)
npm install

# Start dev server
npm run dev

# Open in browser
# http://localhost:5173
```

---

## 📋 Implementation Order (Step by Step)

Follow this order to implement the project from scratch:

### Step 1 — Mock Data & API
- [ ] Fill `src/data/products.js` with 8-10 mock product objects
- [ ] Implement `fetchProducts()` in `src/utils/api.js` to return mock data

### Step 2 — Zustand Stores
- [ ] Implement `useAuthStore.js` with `user`, `login()`, `logout()`, `register()`
- [ ] Implement `useCartStore.js` with `items[]`, `addToCart()`, `removeFromCart()`, `clearCart()`

### Step 3 — Auth Pages
- [ ] Build the **Login** form with email/password → calls `useAuthStore.login()`
- [ ] Build the **Register** form with name/email/password → calls `useAuthStore.register()`
- [ ] Implement **ProtectedRoute** to guard the Cart page

### Step 4 — Routing
- [ ] Wrap `<App />` in `<BrowserRouter>` inside `main.jsx`
- [ ] Set up `<Routes>` in `App.jsx` with paths: `/`, `/login`, `/register`, `/cart`
- [ ] Wrap the `/cart` route in `<ProtectedRoute>`

### Step 5 — Layout Components
- [ ] Build **Header** with logo, nav links, and cart count badge
- [ ] Build **Hero** promotional banner
- [ ] Build **Footer** with links and copyright

### Step 6 — Product Listing
- [ ] Build **ProductCard** component showing image, name, price, and "Add to Cart"
- [ ] Build **Home** page: Header → Hero → Product Grid → Footer
- [ ] Fetch products using `fetchProducts()` in a `useEffect`

### Step 7 — Cart & Booking
- [ ] Build **Cart** page: list cart items, show total, "Book Now" button
- [ ] On "Book Now" → `console.log()` the cart data (final booking) → clear cart

---

## 🔑 Key Concepts

### Zustand (State Management)
Zustand is a minimal state management library. Stores are created with `create()`:
```js
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

### Protected Routes
The `ProtectedRoute` component checks if the user is logged in. If not, it redirects to `/login`:
```jsx
function ProtectedRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
```

### Mock → Real API Migration
When the backend (Intern 3) is ready, update `src/utils/api.js`:
```js
// Replace mock data with:
const response = await fetch('http://localhost:5000/api/products');
const data = await response.json();
return data;
```

---

## 📌 Notes

- Every file in `src/` contains **detailed comments** explaining what to implement.
- Open any file and read the instructions at the top before coding.
- Use **Tailwind CSS utility classes** for all styling — avoid writing custom CSS.
- The Cart page is **protected** — users must be logged in to access it.
- The "Book Now" button should `console.log()` the cart data as the final booking output.
