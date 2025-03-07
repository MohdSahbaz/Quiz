import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const userApiUrl = import.meta.env.VITE_API_USER_AUTH;

const RoundOne = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/roundone`
        );
        setQuestions(response.data.questions || []);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch questions");
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      handleNextQuestion(); // Auto-move to the next question when time runs out
    }
  }, [timer]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (
      questions[currentQuestionIndex] &&
      selectedOption === questions[currentQuestionIndex].correctAnswer
    ) {
      const roundOneScore =
        parseInt(localStorage.getItem("roundOne") || "0", 10) + 1;
      const totalScore =
        parseInt(localStorage.getItem("totalScore") || "0", 10) + 1;

      // Update scores in localStorage
      localStorage.setItem("roundOne", roundOneScore);
      localStorage.setItem("totalScore", totalScore);

      // Update state
      setScore(roundOneScore);
    }

    setSelectedOption(null);
    setTimer(15);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSetScore = async () => {
    const totalScore = localStorage.getItem("totalScore") || "0";
    const userId = localStorage.getItem("userId");

    try {
      const response = await axios.put(`${userApiUrl}/update-score`, {
        userId,
        totalScore: parseInt(totalScore, 10),
      });

      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error updating score:",
        error.response?.data || error.message
      );
    }
  };

  const handleFinishQuiz = () => {
    return score >= 10 ? (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 animate-bounce">
            Round One Completed!
          </h1>
          <p className="text-2xl">
            Your Score: {score} / {questions.length}
          </p>
          <button
            className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
            onClick={() => navigate("/rlopki2op")}
          >
            Go to Next Round
          </button>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 animate-bounce text-red-500">
            Quiz Failed!
          </h1>
          <p className="text-2xl">
            Your Score: {score} / {questions.length}
          </p>
          <button
            className="mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            onClick={() => {
              navigate("/");
              handleSetScore();
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  };

  if (currentQuestionIndex >= questions.length && !isLoading) {
    return handleFinishQuiz();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      {isLoading ? (
        <p className="text-2xl animate-pulse">Loading questions...</p>
      ) : error ? (
        <p className="text-red-500 text-xl">{error}</p>
      ) : questions.length > 0 ? (
        <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-500">
          <h1 className="mb-3 text-center text-xl">Round One</h1>
          <div className="relative w-full bg-gray-700 rounded-full h-4 mb-4">
            <div
              className="bg-purple-500 h-4 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="text-right text-lg font-semibold mb-2">
            Time Remaining: <span className="animate-pulse">{timer}s</span>
          </div>
          <h1 className="text-2xl font-bold mb-4 animate-fadeIn">
            Question {currentQuestionIndex + 1} / {questions.length}
          </h1>
          <p className="text-xl mb-6">
            {questions[currentQuestionIndex]?.question}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestionIndex]?.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-3 rounded-lg font-medium text-left border transition-all duration-300 ${
                  selectedOption === option
                    ? "bg-purple-500 text-white border-purple-500 hover:bg-purple-600"
                    : "bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 text-right">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className={`px-6 py-3 rounded-md text-white font-semibold ${
                selectedOption
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-gray-500 cursor-not-allowed"
              } transition-all duration-300`}
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-2xl">No questions available.</p>
      )}
    </div>
  );
};

export default RoundOne;
