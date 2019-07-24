
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const passport = require('./passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 8080;
const log = console.log;

const cookieSession = require('cookie-session');

const app = express();


// Require our db models
var db = require('./models');
//database connection
mongoose.connect('mongodb://localhost/newColabDB', {useNewUrlParser: true});
// ///////////////////////
// Schema instantiation //
// ///////////////////////
db.ballet.create({
  userId: 'test',
  properties: {pointe: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.latin.create({
  userId: 'test',
  properties: {freestyle: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.hipHop.create({
  userId: 'test',
  properties: {freestyle: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.contemporary.create({
  userId: 'test',
  properties: {freestyle: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.portrait.create({
  userId: 'test',
  properties: {camera: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.street.create({
  userId: 'test',
  properties: {camera: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.motion.create({
  userId: 'test',
  properties: {camera: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});
db.landscape.create({
  userId: 'test',
  properties: {camera: true},
  images: ['one', 'two', 'three'],
  videos: ['one', 'two', 'three']
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie session
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(passport.initialize());
//add coookie to browser
app.use(passport.session());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);





app.listen(PORT, () => 
  log(`Server listening on PORT ${PORT}`));


module.exports = app;


