# 🚀 Login API with Axios Integration

Welcome to the **Login API with Axios** project! This simple application demonstrates how to implement a login API using **Express.js** on the backend, integrated with **Axios** on the frontend to handle user authentication. The backend returns a mock JWT token upon successful login.

## 🌟 Features

- **Mock Login Endpoint**: Checks the provided credentials and returns a JWT token upon successful authentication.
- **Axios Integration**: The frontend uses **Axios** to make requests to the server.
- **CORS Support**: Cross-origin requests are enabled to allow communication between the frontend and backend.
- **JWT Token Handling**: Stores the JWT token in `localStorage` for future API calls.

---


## 🛠 Installation

### Prerequisites

- **Node.js** and **npm** installed on your local machine.


⚙️ How to Use
1. Login:
Open the login page in your browser.
Enter the credentials:
Email: test@example.com
Password: 123456
Upon clicking the Login button, the backend will authenticate the credentials. If they are correct, the API will return a mock JWT token.
2. JWT Token Handling:
Upon successful login, the JWT token will be stored in localStorage for use in subsequent requests.
If the credentials are incorrect, an error message will be shown.

📦 Dependencies
express: Web framework for Node.js.
body-parser: Middleware for parsing JSON bodies.
cors: Middleware for enabling Cross-Origin Resource Sharing.
axios: Promise-based HTTP client for making requests.

✨ Contributions
Contributions are always welcome! Feel free to fork the repository, submit issues, or create pull requests.

