const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Mock product database
const products = [];

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log('Product Service is running on port ' + port);
});