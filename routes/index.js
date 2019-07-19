var express = require('express');
var router = express.Router();

/*localhost:3000  will land us here _ a base 'home page' */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
