const db = require('../models');

// *Controller Methods

module.exports {
    search: function(req, res) {
        db.users
            .find(req.query)
            // .find(req.query)
            // .sort({ date: -1 })
            // .then(dbQRes => res.json(dbQRes))
            .catch(err => res.status(422).json(err));
      }
};