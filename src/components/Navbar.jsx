import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import SoundToggle from './SoundToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'bg-black/95 backdrop-blur-md border-b border-gold-500/20' 
          : 'bg-white/95 backdrop-blur-md border-b border-gold-500/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-8 h-8 text-gold-300" />
            <span className="text-2xl font-bold gradient-text">Portfolio</span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                    isDark 
                      ? 'text-gray-300 hover:text-gold-300' 
                      : 'text-gray-700 hover:text-gold-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-gradient text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 mr-4"
              >
                Hire Me
              </motion.button>
              <div className="flex gap-2">
                <SoundToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-300 hover:text-gold-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black-100/95 backdrop-blur-md border-t border-gold-500/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-gold-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gold-gradient text-black px-6 py-2 rounded-full font-semibold mt-4">
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;