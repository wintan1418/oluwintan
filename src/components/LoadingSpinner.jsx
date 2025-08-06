import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const LoadingSpinner = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-gold-500/20 border-t-gold-500 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl">⚡</span>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;