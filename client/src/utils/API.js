// Saved hits our Mongoose API
const router = require("express").Router();
const userController = require("../../../controllers/userController");

// "/api/books"
router.route("/authentication/search")
    .get(userController.search)
    .post(books.);

// !  .get(booksCon.findAll)
//  ! .post(booksCon.create);

// !"/api/books/:id"
// !router.route("/:id").delete(booksCon.remove);

module.exports = router;
