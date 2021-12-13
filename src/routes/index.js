const express = require("express");
const route = express.Router();

// ROUTE

route.get("/", (req, res) => {
  res.render("index.html", { title: "first website express" });
});

route.get("/contact", (req, res) => {
  res.render("contact.html", { title: "contact" });
});

route.get("/about", (req, res) => {
  res.render("about.html", { title: "about" });
});

module.exports = route;
