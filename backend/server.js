const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const quizRouter = require("./routes/quizRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoute");
const leaderbordRoutes = require("./routes/leaderboardRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/quiz", quizRouter);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/api", leaderbordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
