const express = require('express');
const router = express.Router();
const History = require('../models/History');

router.get('/', async (req, res) => {
  const history = await History.find()
    .populate('userId', 'name')
    .sort({ claimedAt: -1 });
  res.json(history);
});

module.exports = router;
