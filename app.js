const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const passport = require("./passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const PORT = process.env.PORT || 8080;
const log = console.log;

const cookieSession = require("cookie-session");

// const seeds = require("./seeds");

const app = express();

// Require our db models
var db = require("./models");
mongoose.Promise = global.Promise; 
//database connection
mongoose.connect(process.env.MONGODB_URI||"mongodb://team:team1234@ds347367.mlab.com:47367/heroku_lqf3dq9g", 
{ useMongoClient: true });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie session
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"]
  })
);

app.use(passport.initialize());
//add coookie to browser
app.use(passport.session());

app.use("/", indexRouter);
app.use("/authentication", usersRouter);

app.listen(PORT, () => log(`Server listening on PORT ${PORT}`));

module.exports = app;
