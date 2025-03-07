import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_ADMIN = import.meta.env.VITE_API_ADMIN;

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await axios.post(`${API_ADMIN}/login`, {
        email,
        password,
      });
      localStorage.setItem("adminToken", true);
      navigate("/admin");
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white relative">
      {/* Animated Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-teal-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome Back
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-300 mb-8 leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Sign in to access the Admin Dashboard
      </motion.p>

      {/* Login Form */}
      <motion.form
        onSubmit={handleForm}
        className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-400 bg-red-800/20 p-3 rounded-lg text-center border border-red-600">
            {error}
          </div>
        )}

        {/* Glowing Submit Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            type="submit"
            className="w-full py-3 font-bold text-lg bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-green-500/50 transition-transform"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </motion.div>
      </motion.form>

      {/* Footer */}
      <motion.footer
        className="mt-5 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Built with ❤️ by{" "}
        <span className="font-semibold text-blue-400">Krishna Giri</span>
      </motion.footer>
    </div>
  );
};

export default Login;
