const RoundOne = require("../models/RoundOne");

// Update a RoundOne question by questionNo
exports.updateRoundOne = async (req, res) => {
  try {
    const { questionNo } = req.params;
    const { question, options, correctAnswer } = req.body;

    const updatedQuestion = await RoundOne.findOneAndUpdate(
      { questionNo }, // Use questionNo to find the document
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
