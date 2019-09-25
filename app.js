const express = require("express");
const tweetyApp = express();
const PORT = process.env.PORT || 3000;
//const morgan = require("morgan");

tweetyApp.use("/", function(req, res, next) {
  console.log("Request recibida");
  next();
});

tweetyApp.use("/special/", function(req, res, next) {
  console.log("Entro a Special");
  next();
});

tweetyApp.get("/", function(req, res) {
  return res.send("<h1>Hello World!!!!!!!</h1>");
});
tweetyApp.get("/special/", function(req, res) {
  return res.send("<h1>llegaste a un area especial</h1>");
});
tweetyApp.post("/", function(req, res) {});
tweetyApp.put("/", function(req, res) {});
tweetyApp.delete("/", function(req, res) {});

tweetyApp.listen(PORT, () => console.log("Server started on port ${PORT}"));
