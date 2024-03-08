const mongoose = require('mongoose');

// Define a schema for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
