import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoundThreeAdmin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/roundthree/${id}`, {
        question,
        options,
        correctAnswer,
      });
      alert("Question updated successfully!");
      navigate("/admin/rounds");
    } catch (error) {
      console.error("Error updating question", error);
      alert("Failed to update question");
    }
  };

  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-500 to-blue-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Round 3 - Admin
      </motion.h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 max-w-lg w-full">
        <input
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          type="text"
          placeholder="Enter Question No"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {options.map((opt, index) => (
          <input
            key={index}
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            type="text"
            placeholder={`Option ${index + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        ))}
        <input
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          type="text"
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
        <motion.button
          onClick={handleUpdate}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600"
        >
          Update Question
        </motion.button>
      </div>

      <motion.button
        onClick={() => navigate("/admin/rounds")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        Back to Rounds
      </motion.button>
    </div>
  );
};

export default RoundThreeAdmin;
