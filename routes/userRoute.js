const express = require('express');
const User = require('../models/User'); // Adjust the path if necessary
const router = express.Router();

// Route to get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find(); // Use find() for Mongoose
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
});

router.post('/adduser',
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const { fname, email, password, cpassword } = req.body;

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ $or: [{ email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email or username already exists' });
      }

      const user = new User({
        fname,
        email,
        password,
        cpassword
      });

      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user' });
    }
});

module.exports = router;

