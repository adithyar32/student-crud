# Spring Boot + React Employee Management System

This is a full-stack CRUD application built using **Spring Boot** for the backend and **React.js** (with Tailwind CSS) for the frontend. It allows users to add, update, delete, and view employee records with real-time feedback using `react-toastify`.

---

## 🚀 Features

- Add new employees
- Update existing employee details
- Delete employees
- View all employees in a table
- Toast notifications on actions
- Modular service and routing architecture

---

## 🛠 Tech Stack

### Backend (Spring Boot):
- Java
- Spring Boot
- Spring Data JPA
- RESTful APIs
- CORS configuration
- MySQL / H2 database (configurable)

### Frontend (React):
- React.js (CRA or Vite)
- Axios for API requests
- React Router DOM
- Tailwind CSS for styling
- React Toastify for popups

---

## ⚙️ Project Setup

### Backend (Spring Boot)

1. Open the backend folder in your IDE (e.g., IntelliJ, Eclipse).
2. Ensure you have Java 17+ installed.
3. Configure your database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_db
   spring.datasource.username=root
   spring.datasource.password=your_password
