const RoundOne = require("../models/RoundOne");
const RoundTwo = require("../models/RoundTwo");
const RoundThree = require("../models/RoundThree");

const roundOne = async (req, res) => {
  try {
    const questionsData = await RoundOne.find();

    if (!questionsData || questionsData.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Shuffle the questions array
    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

    res.json({ questions: shuffledQuestions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const roundTwo = async (req, res) => {
  try {
    const questionsData = await RoundTwo.find();

    if (!questionsData || questionsData.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Shuffle the questions array
    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

    res.json({ questions: shuffledQuestions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const roundThree = async (req, res) => {
  try {
    const questionsData = await RoundThree.find();

    if (!questionsData || questionsData.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Shuffle the questions array
    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

    res.json({ questions: shuffledQuestions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = { roundOne, roundTwo, roundThree };
