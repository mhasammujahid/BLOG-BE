// Import Mongoose
const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  dateOfBirth: {
    type: Date,
    required: false
  },

}, {timestamps: true});

// Create the User Model
const User = mongoose.model('User', userSchema);

// Export the User Model
module.exports = User;
