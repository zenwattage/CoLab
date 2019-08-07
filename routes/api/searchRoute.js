const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// * /api/search
router.post("/search", function(req, res) {
  console.log("Checking in from searchRoute" + req + res);

  // userController.search;
});

module.exports = router;
