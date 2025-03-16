const express = require("express");
const { updateRoundOne } = require("../controller/roundOneController");

const router = express.Router();

// Update a specific question in RoundOne
router.put("/roundone/:id", updateRoundOne);

module.exports = router;
