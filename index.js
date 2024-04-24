const express = require("express");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(globalMiddleware);
app.use(require("./routes"));

// Handle route

app.listen(4000, () => {
  console.log("Server is listening on PORT 4000");
});

// Global middleware
function globalMiddleware(req, res, next) {
  console.log("I'm a global middleware");
  next();
}
// Local middleware
function localMiddleware(req, res, next) {
  console.log("I'm a local middleware");
  next();
}

// // If everything seems ok, controller will call response methods.
// // If everything seems ok, middleware will call next methods.

// function controllerSignature(req, res, next) {
//   // read request object
//   // process request
//   // response back the result
// }

// function middlewareSignature(req, res, next) {

//   next();
// }
