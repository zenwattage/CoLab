const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  password: {type: String, default: ''},
  email: {type: String, default: ''},
  imageUrl: {type: String, default: ''},
  bio: {type: String, default: ''},
  instagram: {type: String, default: ''},
  linkedin: {type: String, default: ''},
  other: {type: String, default: ''},
  buttons: [{'profession':String},{'talents':Array}]
});


// const UserSchema = new Schema({
//   username: String,
//   password: String,
//   email: String,
//   bio: String
// });

const User = mongoose.model('User', UserSchema);

module.exports = User;