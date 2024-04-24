const express = require("express");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(globalMiddleware);
app.use(require("./routes"));

// 404 error middleware
app.use((req, res, next) => {
  // let's create error object
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

// Global error middleware
app.use((error, req, res, next) => {
  // If there is error.status, that means it's our generated error.
  if (error.status) {
    return res.status(error.status).send(error.message);
  }

  // If there is no error.status, that means it's server error
  res.status(500).send("Something went wrong");
});

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
