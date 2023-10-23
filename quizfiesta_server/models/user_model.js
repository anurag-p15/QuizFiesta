// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, unique:true, required: true },
  name: { type: String, required: true, unique:true},
  bio:{ type:String, required: true},
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports = User;
