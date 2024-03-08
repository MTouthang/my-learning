const mongoose = require('mongoose');
const User = require('./model/users.model');

// Connection URL
const MONGODB_URI = 'mongodb://127.0.0.1:27017/db';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {});

// Handle connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // createUser(); //un-comment to add user
  // fetchUser(); // un-comment to fetch user data
  // updateUser(); // un-comment to update user data
  // deleteUser(); // un-comment to delete user data
});

// createUser
const createUser = async () => {
  try {
    // Create a new user instance
    const newUser = new User({
      email: 'john@example.com',
      password: 'password123',
    });

    // Save the user to the database
    const user = await newUser.save();
    console.log('User saved successfully:', user);
  } catch (error) {
    console.error(`User failed to save: ${error}`);
  }
};

// fetch user data
const fetchUser = async () => {
  try {
    // Fetch all users from the database
    const users = await User.find({});
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// update user
const updateUser = async () => {
  try {
    const result = await User.updateOne(
      { username: 'john_doe' },
      { email: 'john@example.org' }
    );
    console.log('Update result:', result);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

// delete user
const deleteUser = async () => {
  try {
    const result = await User.deleteOne({ username: 'john_doe' });
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
