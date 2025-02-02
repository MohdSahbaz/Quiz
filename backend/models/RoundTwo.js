const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
});

const RoundTwo = mongoose.model("RoundTwo", QuestionSchema);

module.exports = RoundTwo;
