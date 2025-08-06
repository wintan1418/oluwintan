import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrails(prevTrails => [
        ...prevTrails.slice(-20), // Keep last 20 trail points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setCursorVariant('input');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Remove old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prevTrails => prevTrails.slice(-15));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
    },
    input: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 0.8,
    }
  };

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trail particles */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 w-1 h-1 bg-gold-400 rounded-full pointer-events-none z-[9999] mix-blend-multiply"
          style={{
            x: trail.x - 2,
            y: trail.y - 2,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0,
          }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.02
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference ${
          isHovering ? 'bg-white' : 'bg-gold-400'
        }`}
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-gold-400 pointer-events-none z-[9998] opacity-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;