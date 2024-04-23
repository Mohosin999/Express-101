const express = require("express");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const { log } = require("console");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(globalMiddleware);

// Handle route
app.get("/", (req, res) => {
  res.send(`<h1>I am Home Route</h1>`);
});

app.get("/about", localMiddleware, (req, res) => {
  res.send(`<h1>I am About Route</h1>`);
});

app.get("/help", (req, res) => {
  res.send(`<h1>I am Help Route</h1>`);
});

// send html as a string
app.get("/html", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NodeJS 101 Course</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
        }
        .container {
          width: 50%;
          margin: 2rem auto;
          padding: 2rem;
          background: #dddeee;
        }
        .text{
            margin-top: 0.5rem
        }
      </style>
    </head>
    <body class="container">
      <h1>Hello NodeJS, You are Really Awesome!</h1>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia!
        Numquam, ipsa, velit voluptatibus reiciendis totam excepturi molestiae
        nesciunt ullam quae soluta modi quo, pariatur aperiam perspiciatis quasi
        dolore nam.
      </p>
    </body>
  </html>  
  `);
});

// send html file
app.get("/htmlfile", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("Error ", err);
      res.send(`<h1>Something Went Wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

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
