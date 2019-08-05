const db = require('../models')

// define methods for talentsController

module.exports {
    create: function(req, res) {
        db.ballet
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}