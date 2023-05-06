const express = require('express');
const User = require('./models/User');
const router = express.Router();


// Register user
router.post('/register', async (req, res) => {
    const user = new User(req.body);
    try {
      const savedUser = await user.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Get all users
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.delete("/deleteAll", (req, res) => {
    // Delete all data using the model
    User.deleteMany({}, (err) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ error: "An error occurred while deleting data." });
      }
  
      // Data deleted successfully
      return res.status(200).json({data:[], message: "All data deleted successfully." });
    });
  });

module.exports = router;
