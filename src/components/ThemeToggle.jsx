import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-14 h-8 rounded-full p-1 transition-all duration-300 ${
        isDark 
          ? 'bg-gold-gradient shadow-lg shadow-gold-500/30' 
          : 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30'
      }`}
    >
      <motion.div
        animate={{
          x: isDark ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDark 
            ? 'bg-black text-gold-400' 
            : 'bg-white text-blue-600'
        }`}
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;