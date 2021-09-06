import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  biography: {
    type: String
  },
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;