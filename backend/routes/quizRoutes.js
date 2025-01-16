const express = require("express");
const {
  roundOne,
  roundTwo,
  roundThree,
} = require("../controller/quizController");
const router = express.Router();

router.get("/roundone", roundOne);
router.get("/roundtwo", roundTwo);
router.get("/roundthree", roundThree);

module.exports = router;
