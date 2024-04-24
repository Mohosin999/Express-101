const router = require("express").Router();
// Import controller from "controller.js" file.
const {
  homeController,
  aboutController,
  helpController,
} = require("./controller");

router.get("/", homeController);

router.get("/about", aboutController);

router.get("/help", helpController);

module.exports = router;
