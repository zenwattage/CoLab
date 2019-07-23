const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  // gender captured during talent survey
  gender: {type: String, default: ''},
  bio: {type: String, default: ''},
  instagram: {type: String, default: ''},
  linkedin: {type: String, default: ''},
  talents: Array,
});


// const UserSchema = new Schema({
//   username: String,
//   password: String,
//   email: String,
//   bio: String
// });

const User = mongoose.model('User', UserSchema);

module.exports = User;