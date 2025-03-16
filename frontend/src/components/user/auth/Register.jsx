import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const loginApi = import.meta.env.VITE_API_USER_AUTH;

const UserAuth = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${loginApi}/register`, {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to connect to the server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Register
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 max-w-md w-full"
      >
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full px-6 py-3 font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-pink-500/50 transform transition-transform"
          disabled={loading}
        >
          {loading ? "Processing..." : "Register"}
        </motion.button>

        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-400 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>

      <motion.footer
        className="mt-5 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Created with ❤️ by{" "}
        <span className="font-semibold text-purple-400">Krishna Giri</span>
      </motion.footer>
    </div>
  );
};

export default UserAuth;
