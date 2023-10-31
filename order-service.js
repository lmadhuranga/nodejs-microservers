const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

// Mock order database
const orders = [];

app.post('/orders', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(port, () => {
  console.log('Order Service is running on port ' + port);
});