import { motion } from 'framer-motion';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gold-500/20 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gold-gradient p-4 rounded-full shadow-lg hover:shadow-gold-500/50 transition-all duration-300 group"
          >
            <ArrowUp className="w-6 h-6 text-black" />
            <div className="absolute inset-0 bg-gold-gradient rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-6 h-6 text-gold-400" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-3">
              <span className="gradient-text">Thanks for visiting!</span>
            </h3>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              Feel free to reach out if you'd like to collaborate on a project or just want to connect. 
              Let's build something amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="flex items-center gap-3 text-gray-400"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 20, -20, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span>using</span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-gold-400 font-semibold"
            >
              React
            </motion.span>
            <span>&</span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-gold-400 font-semibold"
            >
              Tailwind CSS
            </motion.span>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full max-w-md h-px bg-gold-gradient"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} Oluwadare Juwon. All rights reserved.
            </p>
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-gold-400/60 text-xs"
            >
              Designed & Developed with passion
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;