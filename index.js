const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example route to get stock data
app.get('/stocks', (req, res) => {
  res.send('List of stocks');
});

// Example route to place an order
app.post('/order', (req, res) => {
  const order = req.body;
  // Process order
  res.send(`Order received for ${order.symbol}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
