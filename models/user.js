const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  gender: String,
  bio: String,
  instagram: String,
  linkedin: String,
  talents: {
    dancer: {
      properties: {
        style: String,
      },
      images: Array,
      videos: Array,
    },
    photographer: {
      properties: {
        style: String,
      },
      images: Array,
      videos: Array,
    }
  }
});


// const UserSchema = new Schema({
//   username: String,
//   password: String,
//   email: String,
//   bio: String
// });

const User = mongoose.model('User', UserSchema);

module.exports = User;