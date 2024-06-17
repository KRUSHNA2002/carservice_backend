const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;
