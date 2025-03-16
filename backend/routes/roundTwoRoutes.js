const express = require("express");
const { updateRoundTwo } = require("../controller/roundTwoController");

const router = express.Router();

// Update a specific question in RoundTwo
router.put("/roundtwo/:id", updateRoundTwo);

module.exports = router;
