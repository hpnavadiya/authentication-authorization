# 🚀 authentication-authorization

**authentication-authorization** is a comprehensive authentication and authorization package for Node.js applications. It provides secure user authentication, token generation and validation, role-based access control (RBAC), and more, empowering developers to build robust and secure applications with ease.

## ✨ Features

- **User Authentication**: Authenticate users securely with username and password.
- **JWT Generation and Validation**: Generate JSON Web Tokens (JWT) for authenticated users and validate them to ensure security.
- **Role-Based Access Control (RBAC)**: Control access to resources based on user roles, enhancing security and data protection.
- **Secure Password Hashing**: Utilize bcrypt for secure password hashing, protecting user credentials from unauthorized access.

## 📦 Installation

Install **authentication-authorization** in your Node.js project via npm:

```bash
npm install authentication-authorization
```

## 🛠️ Usage

```javascript
const { authenticate, logout, validateToken, authorize } = require('authentication-authorization');

// Authenticate user
const token = await authenticate('username', 'password');

// Validate token
const decodedToken = validateToken(token);

// Authorize user
const isAdmin = authorize(token, 'admin');

// Logout user
logout(token);
```

## 📧 Contact

Follow me on LinkedIn [@HarshNavdiya](www.linkedin.com/in/harshnavdiya) for updates and announcements!
