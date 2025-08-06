import { useState } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ children, className = "", glowColor = "gold-500" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative w-full h-full transform-gpu transition-transform duration-200 ease-out`}
        style={{
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: `0 20px 40px rgba(255, 215, 0, 0.3)`,
        }}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-${glowColor}/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Shine effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"
          style={{
            animation: 'shine 2s ease-in-out infinite',
          }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default Card3D;