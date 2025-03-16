import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Rounds = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white">
      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-teal-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Handle Quiz Rounds
      </motion.h1>

      {/* Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {/* Round 1 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/admin/round-1")}
          className="bg-gray-800 cursor-pointer p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-blue-500/50 transform transition-all"
        >
          <button className="text-xl font-semibold text-blue-400 block text-center">
            Round 1
          </button>
        </motion.div>

        {/* Round 2 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/admin/round-2")}
          className="bg-gray-800 cursor-pointer p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-green-500/50 transform transition-all"
        >
          <button className="text-xl font-semibold text-green-400 block text-center">
            Round 2
          </button>
        </motion.div>

        {/* Round 3 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/admin/round-3")}
          className="bg-gray-800 p-6 cursor-pointer rounded-lg shadow-lg border border-gray-700 hover:shadow-teal-500/50 transform transition-all"
        >
          <button className="text-xl font-semibold text-teal-400 block text-center">
            Round 3
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-10 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Built with ❤️ by{" "}
        <span className="font-semibold text-blue-400">Krishna Giri</span>
      </motion.footer>
    </div>
  );
};

export default Rounds;
