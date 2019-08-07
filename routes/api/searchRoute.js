const router = require("express").Router();
const userController = require("../../controllers/userController");

// * /api/search
router.route("/search", function(req, res) {
  console.log("Checking in from searchRoute" + req + res);

  userController.search;
});

module.exports = router;
