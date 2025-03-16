const RoundTwo = require("../models/RoundTwo");

// Update a RoundTwo question by questionNo
exports.updateRoundTwo = async (req, res) => {
  try {
    const { questionNo } = req.params; // Get questionNo from URL params
    const { question, options, correctAnswer } = req.body;

    const updatedQuestion = await RoundTwo.findOneAndUpdate(
      { questionNo }, // Use questionNo instead of _id
      { question, options, correctAnswer },
      { new: true, runValidators: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
