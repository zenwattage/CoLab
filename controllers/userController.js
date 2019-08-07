const db = require("../models");

// *Controller Methods

module.exports = {
  search: function(req, res) {
    console.log("I'm inside userController" + req);
    db.users
      .find(req.body)
      // .find(req.query)
      // .sort({ date: -1 })
      .then(QueryRes => res.json(QueryRes))
      .catch(err => res.status(422).json(err));
  }
};
