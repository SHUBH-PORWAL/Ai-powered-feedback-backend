# AI Feedback App - Backend

This is the backend service for the **AI Feedback App** built with **Node.js, Express, MongoDB, and JWT Authentication**.

## Features
- User authentication (Register/Login with JWT)
- Secure password hashing using bcrypt
- Protected routes with JWT middleware
- MongoDB for database storage
- Well-structured codebase with controllers, routes, and middleware

---

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT (JSON Web Tokens)**

---

## Project Structure
backend/
│── src/
│ ├── controllers/ # Business logic
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Auth middleware
│ └── server.js # Entry point
│
├── .env # Environment variables
├── package.json
└── README.md

##  Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SHUBH-PORWAL/Ai-powered-feedback-backend.git

2. Install Dependencies

npm install --force
3. Create .env File
Add your environment variables:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-feedback-app
JWT_SECRET= feedback
JWT_EXPIRE=7d
NODE_ENV=development
4. Run the Server

npm start
Server will start on:
👉 http://localhost:5000
