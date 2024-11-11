const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to handle form submissions and save users to the database
router.post('/waitlist/submit', async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = new User({ name, email });
        const savedUser = await user.save();

        res.status(201).json({ message: 'User saved to the database!', data: savedUser });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
