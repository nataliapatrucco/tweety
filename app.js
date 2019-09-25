const express = require("express");
const tweetyApp = express();
const PORT = process.env.PORT || 3000;
const nunjucks = require("nunjucks");

const locals = {
  title: "An Example",
  people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }]
};

tweetyApp.set("view engine", "html"); // hace que res.render funcione con archivos html
tweetyApp.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views", { noCache: true });

tweetyApp.use("/", function(req, res, next) {
  console.log("Request recibida");
  next();
});

tweetyApp.use("/special/", function(req, res, next) {
  console.log("Entro a Special");
  next();
});

tweetyApp.get("/", function(req, res) {
  res.render("index", locals, (err, output) => {
    if (err) throw err;
    res.send(output);
  });
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

tweetyApp.listen(PORT, () => console.log(`Server started on port ${PORT}`));
