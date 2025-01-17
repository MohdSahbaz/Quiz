const RoundOne = require("./roundone");
const RoundTwo = require("./roundtwo");
const RoundThree = require("./roundthree");

// Utility function to shuffle questions
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Round One handler
const roundOne = (req, res) => {
  try {
    if (!RoundOne || RoundOne.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Shuffle the questions array
    const shuffledQuestions = shuffleArray([...RoundOne]);

    res.json({ questions: shuffledQuestions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Round Two handler
const roundTwo = (req, res) => {
  try {
    if (!RoundTwo || RoundTwo.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Shuffle the questions array
    const shuffledQuestions = shuffleArray([...RoundTwo]);

    res.json({ questions: shuffledQuestions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Round Three handler
const roundThree = (req, res) => {
  try {
    if (!RoundThree || RoundThree.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Shuffle the questions array
    const shuffledQuestions = shuffleArray([...RoundThree]);

    res.json({ questions: shuffledQuestions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = { roundOne, roundTwo, roundThree };

// use if connected to database
// const roundOne = async (req, res) => {
//   try {
//     const questionsData = await RoundOne.find();

//     if (!questionsData || questionsData.length === 0) {
//       return res.status(404).json({ message: "No questions found" });
//     }

//     // Shuffle the questions array
//     const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

//     res.json({ questions: shuffledQuestions });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "An error occurred", error: error.message });
//   }
// };

// const roundTwo = async (req, res) => {
//   try {
//     const questionsData = await RoundTwo.find();

//     if (!questionsData || questionsData.length === 0) {
//       return res.status(404).json({ message: "No questions found" });
//     }

//     // Shuffle the questions array
//     const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

//     res.json({ questions: shuffledQuestions });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "An error occurred", error: error.message });
//   }
// };

// const roundThree = async (req, res) => {
//   try {
//     const questionsData = await RoundThree.find();

//     if (!questionsData || questionsData.length === 0) {
//       return res.status(404).json({ message: "No questions found" });
//     }

//     // Shuffle the questions array
//     const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

//     res.json({ questions: shuffledQuestions });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "An error occurred", error: error.message });
//   }
// };

// module.exports = { roundOne, roundTwo, roundThree };
