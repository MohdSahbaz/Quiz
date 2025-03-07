const express = require("express");
const router = express.Router();
const User = require("../models/User");

const leaderboard = async (req, res) => {
  try {
    const topUsers = await User.find().sort({ totalScore: -1 }).limit(10);
    res.status(200).json(topUsers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard data" });
  }
};

module.exports = leaderboard;
