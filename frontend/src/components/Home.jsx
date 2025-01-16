import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 text-white relative">
      {/* Animated Header Section */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Greek Automata
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-300 mb-10 leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Dive into the ultimate coding challenge! Solve 15 thrilling questions,
        test your programming skills, and rise to the top. Are you ready?
      </motion.p>

      {/* Glowing Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-10"
      >
        <button
          onClick={() => navigate("/rlopop1kopo")}
          className="px-8 py-4 font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-pink-500/50 transform transition-transform"
        >
          Start Quiz
        </button>
      </motion.div>

      {/* Floating Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-purple-500/50 transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-purple-400">
            Challenge
          </h3>
          <p className="text-gray-400">
            Face 15 programming questions designed to test your knowledge and
            speed.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-purple-500/50 transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-pink-400">Rules</h3>
          <p className="text-gray-400">
            Select one correct answer out of four options within the given time
            limit.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-purple-500/50 transform transition-all hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-red-400">Win</h3>
          <p className="text-gray-400">
            Compete with others and claim your title as the ultimate coding
            champion.
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
        Created with ❤️ by{" "}
        <span className="font-semibold text-purple-400">Mohd Sahbaz</span>
      </motion.footer>
    </div>
  );
};

export default Home;
