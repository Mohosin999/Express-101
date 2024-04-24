const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`<h1>I am Home Route</h1>`);
});

router.get("/about", localMiddleware, (req, res) => {
  res.send(`<h1>I am About Route</h1>`);
});

router.get("/help", (req, res) => {
  res.send(`<h1>I am Help Route</h1>`);
});

module.exports = router;
