const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionNo: {
    type: Number,
    required: true,
    unique: true,
  },
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
