import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParallaxContainer = ({ children, speed = 0.5, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;