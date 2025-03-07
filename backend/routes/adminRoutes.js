const express = require("express");
const { login } = require("../controller/adminController");

const router = express.Router();

// Define login route
router.post("/login", login);

module.exports = router;
