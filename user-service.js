const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Mock user database
const users = [];

app.post('/register', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log('User Service is running on port ' + port);
});