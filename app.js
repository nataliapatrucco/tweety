const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const routes = require("./routes");
app.use("/", routes);

app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views", { noCache: true });

app.use("/", function(req, res, next) {
  console.log("Request recibida");
  next();
});

app.use("/special/", function(req, res, next) {
  console.log("Entro a Special");
  next();
});

app.use(express.static("public"));

app.post("/", function(req, res) {});
app.put("/", function(req, res) {});
app.delete("/", function(req, res) {});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const locals = {
//   title: "An Example",
//   people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }]
// };

// app.get("/", function(req, res) {
//   res.render("index", locals, (err, output) => {
//     if (err) throw err;
//     res.send(output);
//   });
// });

// app.get("/", function(req, res) {
//   return res.send("<h1>Hello World!!!!!!!</h1>");
// });
// app.get("/special/", function(req, res) {
//   return res.send("<h1>llegaste a un area especial</h1>");
// });
