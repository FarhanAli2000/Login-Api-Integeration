const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 8080;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Mock Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Example user
  const user = { email: "test@example.com", password: "123456" };

  if (email === user.email && password === user.password) {
    const jwtToken = "mock-jwt-token"; // Replace with actual JWT generation logic
    res.status(200).json({ message: "Login successful", token: jwtToken });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
