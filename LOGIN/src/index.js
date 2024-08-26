const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

// use EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src/views'));

app.get("/", (req, res) => {
  res.render("index"); // or redirect to another route, e.g., res.redirect('/login');
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

const server = app.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on port 3000');
});