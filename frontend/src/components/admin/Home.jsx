import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white relative">
      {/* Animated Header Section */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-teal-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Admin Dashboard
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-300 mb-10 leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Manage quizzes, track user performance, and maintain the application
        seamlessly. Welcome, Admin!
      </motion.p>

      {/* Glowing Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-10"
      >
        <button
          onClick={() => navigate("/rounds")}
          className="px-8 py-4 font-bold text-lg bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-green-500/50 transform transition-transform"
        >
          View Dashboard
        </button>
      </motion.div>

      {/* Floating Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-blue-500/50 transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Manage Quizzes
          </h3>
          <p className="text-gray-400">
            Create, edit, and organize quizzes for users to engage with.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-green-500/50 transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-green-400">
            Analytics
          </h3>
          <p className="text-gray-400">
            Monitor user progress and quiz statistics in real time.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-teal-500/50 transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-teal-400">Settings</h3>
          <p className="text-gray-400">
            Customize platform settings and manage user access seamlessly.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-5 bottom-4 text-center text-gray-400"
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

export default AdminHome;
