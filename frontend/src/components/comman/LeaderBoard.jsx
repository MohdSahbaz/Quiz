import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([]);
  const apiUrl = import.meta.env.VITE_API_LEADERBOARD;

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${apiUrl}/leaderboard`);
        setLeaders(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard", error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white">
      {/* Animated Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Leaderboard
      </motion.h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-lg">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="text-purple-400 border-b border-gray-700">
              <th className="py-2">Rank</th>
              <th className="py-2">Name</th>
              <th className="py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((user, index) => (
              <motion.tr
                key={user._id}
                className="hover:bg-gray-700 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-2 text-center">{index + 1}</td>
                <td className="py-2">{user.name}</td>
                <td className="py-2 text-center">{user.totalScore}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
