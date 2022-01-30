// Dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');

// Port
const port = process.env.PORT || 4000;

// Modules

// Initializing app

const app = express();
// connectDb()

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files Routes
app.use(
  '/assets/utils',
  express.static(path.join(__dirname, '/src/static/utils'))
);
app.use(
  '/assets/products',
  express.static(path.join(__dirname, '/src/static/products'))
);
