const Strategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
  { passReqToCallback: true, usernameField: "email" },
  function(req, email, password, done) {
    const {
      firstName,
      lastName,
      imageUrl,
      instagram,
      bio,
      linkedin,
      other,
      userProfession,
      userTalent,
      userPortfolio
    } = req.body;
    User.findOne({
      email
    })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }
        if (user) {
          return done("User already exists", null);
        }

        //get password and encrypt with bcrypt
        const encryptedPassword = bcrypt.hashSync(password, salt);

        let newUser = new User({
          email,
          password: encryptedPassword,
          firstName,
          lastName,
          imageUrl,
          instagram,
          linkedin,
          other,
          bio,
          userProfession,
          userTalent,
          userPortfolio
        });

        newUser.save((error, inserted) => {
          if (error) {
            return done(error, null);
          }
          delete inserted.password;
          return done(null, inserted);
        });
      });
  }
);

module.exports = SignupStrategy;
