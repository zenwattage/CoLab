var express = require('express');
var router = express.Router();
const passport = require('../passport');

//signup route auth
router.post('/signup', (req, res, next) => {
  //console.log(req.body);
  // Custom Passport Callback
  //passing json back into object
  //first(takes callback) second(takesrequestobject)
  passport.authenticate('local-signup', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops, something happened!',
      });
    }

    //persistent login
    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }
      user.isAuthenticated = true;
      //TODO - dont send password to user client
      return res.json(user);
    });
  })(req, res, next);
});

//signin route Auth
router.post('/signin', function (req, res, next) {

  passport.authenticate('local-signin', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops, something happened!',
      });
    }

    //persistent login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }

      user.isAuthenticated = true;
      //TODO - dont send password to user client
      return res.json(user);

    });
  })(req, res, next);
});




//profile auth route
router.post('/profile', function (req, res, next) {

  passport.authenticate('local-signin', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops, something happened!',
      });
    }

    //persistent login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }

      user.isAuthenticated = true;
      //TODO - dont send password to user client
      return res.json(user);

    });
  })(req, res, next);
});

//search auth route
router.post('/search', function (req, res, next) {

  passport.authenticate('local-signin', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops, something happened!',
      });
    }

    //persistent login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }

      user.isAuthenticated = true;
      //TODO - dont send password to user client
      return res.json(user);

    });
  })(req, res, next);
});



router.get('/api', (req, res) => {
  const email = req.users; //req.session.passport.session
  res.json({
    message: 'Hello World'
  });
});

//logout routing
router.get('/logout', function(req, res) {
  console.log("Inside Logout");
  req.logout();
  res.json({
    isAuthenticated: false
  });
})


module.exports = router;
