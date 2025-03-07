const express = require("express");
const {
  userLogin,
  getUser,
  registerUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/user/:id", getUser); // Get user info by ID

module.exports = router;
