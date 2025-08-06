import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "",
  prefix = "",
  suffix = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    const type = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        timeout = setTimeout(type, deleteSpeed);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          timeout = setTimeout(type, 500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        timeout = setTimeout(type, speed);
        
        if (currentText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="gradient-text"
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="text-gold-400 ml-1"
      >
        |
      </motion.span>
      {suffix}
    </span>
  );
};

export default TypingAnimation;