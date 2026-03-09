const express = require("express");
const path = require("path");
const session = require('express-session');
require('dotenv').config();
const app = express();

//Convert data into json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + "/frontend"));
app.use(express.static(__dirname + "/backend"));
app.use(express.static(__dirname + "/python"));
app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/frontend/views"));

//use EJS as the view engine
app.set('view engine', 'ejs');

// Set view engine for EJS file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
  res.render("default.ejs", { errorMessage: null });
  console.log("Welcome to Home Page");
});