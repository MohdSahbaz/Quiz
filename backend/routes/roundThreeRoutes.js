const express = require("express");
const { updateRoundThree } = require("../controller/roundThreeController");

const router = express.Router();

// Update a specific question in RoundThree
router.put("/roundthree/:id", updateRoundThree);

module.exports = router;
