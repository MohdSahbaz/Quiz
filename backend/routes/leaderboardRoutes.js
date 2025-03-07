const express = require("express");
const leaderboard = require("../controller/leaderboardController");

const router = express.Router();

router.get("/leaderboard", leaderboard);

module.exports = router;
