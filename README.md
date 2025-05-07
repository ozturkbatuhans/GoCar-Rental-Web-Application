# GoCar-Rental-Web-Application

This project is a car rental web application developed as part of my coursework at **VIVES Hogeschool**. The application was built to match all specified project requirements, including routing, templating, form handling, and database integration using Node.js, Express, Handlebars, and SQLite.

---

## ✅ Assignment Compliance

This project fully complies with the provided specifications:

### ✔️ Layout and Partials

- The **CSS file** `style.css` is correctly linked in `views/layouts/main.hbs`.
- The layout is **split into partial views**:
  - `menu.hbs`: navigation bar
  - `footer.hbs`: page footer
  - `form.hbs`: search form (used on both home and cars pages)
  - `hero.hbs`: hero section with dynamic title and breadcrumb (used on all main pages)
  - `car.hbs`: reusable car card component displayed via Handlebars loop

### ✔️ Homepage Features

- Displays 3 cars using a **partial loop** and **array data passed in the route** (`index.js`).
- Includes a **GET search form** for vehicle filtering.

### ✔️ `/cars` Page

- Uses a **dedicated route** (`/cars`) and a **custom router module**.
- Shows a **hero section**, the **search form**, and **lists all cars**.
- Uses the same car card partial and supports query parameters to retain form values.

### ✔️ `/cars/:id` Page

- Shows car **details** with a **POST reservation form** including:
  - Hidden car ID
  - Name, Email, Pickup Date, Message fields
- Uses the hero partial with the **car’s name** as the title and breadcrumb.

### ✔️ Form Handling

- The **home page form** performs a **GET request** to `/cars` and retains field values.
- The **car detail form** performs a **POST request**, saves booking data to the database, and redirects to a `/thank-you` page showing confirmation.

### ✔️ Database Integration

- The database (`cars.db`) is created using the provided script `01-initial-create.js`.
- Car data is read from the database dynamically.
- The `/cars` page supports **vehicle type filtering** from the database.
- A new `bookings` table is created using `02-create-bookings.js`, and booking data is saved on form submission.

### ✔️ Extras Implemented

- The **active menu item** dynamically updates based on the current route using route-aware logic.
- Page-specific titles and breadcrumbs are dynamically rendered using partials.

---

## 🛠 Technologies Used

- **Node.js** and **Express.js** – Backend routing and logic
- **Handlebars (hbs)** – Templating and partials
- **SQLite** – Local database
- **Bootstrap 5** – Responsive UI
- **Custom Helpers** – For dropdown selections and active menu highlighting

---

## 💾 Database Setup

To create the database and tables:

node data/01-initial-create.js     # Creates 'cars' table and inserts data
node data/02-create-bookings.js    # Creates 'bookings' table

## ▶️ How to Run

1. Install Node.js dependencies:
- npm install
- node data/01-initial-create.js
- node data/02-create-bookings.js
- npm start

Open your browser at:
http://localhost:3000

