const express = require('express');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History');

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

// Add user
router.post('/', async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.json(newUser);
});

// Claim points
router.post('/claim/:userId', async (req, res) => {
  const userId = req.params.userId;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = new History({ userId, points });
  await history.save();

  res.json({ user, points });
});

module.exports = router;
