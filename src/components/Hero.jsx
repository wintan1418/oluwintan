import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TypingAnimation from './TypingAnimation';
import ParallaxContainer from './ParallaxContainer';
import { soundManager } from '../utils/soundManager';

const Hero = () => {
  const { isDark } = useTheme();
  
  const typingTexts = [
    "Full-Stack Developer",
    "SaaS Architect", 
    "AI Integration Expert",
    "Ruby on Rails Specialist",
    "React Developer"
  ];

  const handleButtonClick = (type) => {
    soundManager.playClick();
  };

  const handleSocialHover = () => {
    soundManager.playHover();
  };
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`}>
      {/* Animated Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className={`absolute inset-0 opacity-90 ${
          isDark 
            ? 'bg-gradient-to-br from-black via-black-100 to-black' 
            : 'bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50'
        }`}></div>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 80% 80%, #FFA500 0%, transparent 50%), radial-gradient(circle at 40% 80%, #FFB800 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 opacity-30 blur-lg"
              />
              <div className="absolute inset-4 rounded-full bg-black border-2 border-gold-500 flex items-center justify-center overflow-hidden group">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="text-6xl"
                >
                  🧑‍💻
                </motion.div>
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-gold-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
              <span className="gradient-text">Oluwadare Juwon</span>
            </h1>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 h-12 flex items-center justify-center"
            >
              <TypingAnimation
                texts={typingTexts}
                speed={120}
                deleteSpeed={60}
                pauseTime={2000}
                className="text-gold-400"
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Specialized in building <span className="text-gold-400 font-semibold">SaaS platforms</span>, <span className="text-gold-400">AI integrations</span>, and scalable web applications 
            using <span className="text-gold-400">Ruby on Rails</span>, <span className="text-gold-400">React</span>, <span className="text-gold-400">Vue.js</span> and modern technologies
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick('work')}
              onMouseEnter={() => soundManager.playHover()}
              className="bg-gold-gradient text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            <motion.a
              href="https://docs.google.com/document/d/1tvg2gxYmLJMycuv0CHL5pkeGPjXptVoM5jbX_KirF1k/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: "#FFD700" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick('cv')}
              onMouseEnter={() => soundManager.playHover()}
              className={`inline-block border-2 border-gold-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-500/10 transition-all duration-300 ${
                isDark ? 'text-gold-300' : 'text-gold-600'
              }`}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com", delay: 0.9 },
              { icon: Linkedin, href: "https://linkedin.com", delay: 1.0 },
              { icon: Mail, href: "mailto:wintan1418@gmail.com", delay: 1.1 },
            ].map(({ icon: Icon, href, delay }, index) => (
              <motion.a
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                onMouseEnter={handleSocialHover}
                onClick={() => handleButtonClick('social')}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-gold-500/10 border-gold-500/30 text-gold-400 hover:bg-gold-500/20 hover:border-gold-400' 
                    : 'bg-gold-500/20 border-gold-500/50 text-gold-600 hover:bg-gold-500/30 hover:border-gold-500'
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold-400"
          >
            <ParallaxContainer speed={0.2}>
              <ArrowDown className="w-8 h-8 mx-auto animate-pulse" />
            </ParallaxContainer>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
            }}
            animate={{
              y: -10,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;