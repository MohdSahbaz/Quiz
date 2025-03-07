import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");
  const apiUrl = import.meta.env.VITE_API_USER_AUTH;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white relative">
      {/* Animated Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        User Dashboard
      </motion.h1>

      {user ? (
        <motion.div
          className="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 max-w-md w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl font-semibold text-purple-400 mb-3">
            Name: <span className="text-white">{user.name}</span>
          </p>
          <p className="text-xl font-semibold text-pink-400">
            Total Score: <span className="text-white">{user.totalScore}</span>
          </p>
        </motion.div>
      ) : (
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading user data...
        </motion.p>
      )}
    </div>
  );
};

export default UserDashboard;
