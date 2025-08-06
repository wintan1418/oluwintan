import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    soundManager.toggle();
    setSoundEnabled(!soundEnabled);
    
    if (soundEnabled) {
      soundManager.playClick();
    }
  };

  return (
    <motion.button
      onClick={toggleSound}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        soundEnabled 
          ? 'bg-gold-gradient text-black shadow-lg shadow-gold-500/30' 
          : 'bg-gray-600 text-gray-400'
      }`}
      title={`Sound ${soundEnabled ? 'On' : 'Off'}`}
    >
      <motion.div
        animate={{ rotate: soundEnabled ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle;