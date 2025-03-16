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

const RoundTree = mongoose.model("RoundThree", QuestionSchema);

module.exports = RoundTree;
