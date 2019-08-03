const Strategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();


class LogoutStrategy extends Component {
// router.get('/logout', function(req, res){
   req.logout();
//   res.redirect('/');
// });
};

modules.exports = LogoutStrategy; 