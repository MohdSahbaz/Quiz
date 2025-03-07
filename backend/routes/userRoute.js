const express = require("express");
const {
  userLogin,
  getUser,
  registerUser,
  updateUserScore,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/user/:id", getUser); // Get user info by ID
router.put("/update-score", updateUserScore);

module.exports = router;
