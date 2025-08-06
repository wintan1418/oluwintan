import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gold-gradient text-black hover:shadow-gold-500/50' 
              : 'bg-gold-gradient text-black hover:shadow-gold-500/30'
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;