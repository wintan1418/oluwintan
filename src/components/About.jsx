import { motion } from 'framer-motion';
import { Code, Users, Zap, Award, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const About = () => {
  const { isDark } = useTheme();
  
  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "5+ Years",
      description: "Professional Experience",
      color: "from-gold-400 to-gold-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Contract Work",
      description: "US, UK & Global Clients",
      color: "from-gold-500 to-gold-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Full Stack",
      description: "Development Expert",
      color: "from-gold-300 to-gold-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "AI & SaaS",
      description: "Specialist",
      color: "from-gold-600 to-gold-800"
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-black' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
          </motion.div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="gradient-text">About Me</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Passionate web developer with expertise in modern frameworks and technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gold-gradient rounded-lg blur opacity-20"></div>
            <div className={`relative ${isDark ? 'bg-black-100' : 'bg-white'} p-8 rounded-lg border ${isDark ? 'border-gold-500/20' : 'border-gold-500/30'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="text-gold-400">Building</span> Digital Experiences
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                As a seasoned Full-Stack Developer, I specialize in architecting and developing comprehensive 
                <span className="text-gold-400 font-semibold"> SaaS platforms</span> and complex web applications. I've successfully built 
                multi-tenancy systems, <span className="text-gold-400 font-semibold">AI-powered applications</span>, and scalable microservices using 
                <span className="text-gold-400 font-semibold"> Ruby on Rails engines</span> and modern JavaScript frameworks.
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                My expertise spans from <span className="text-gold-400 font-semibold">real estate platforms</span> to 
                <span className="text-gold-400 font-semibold"> AI image generators</span>, with a proven track record of delivering 
                high-performance applications for clients across the US, UK, and beyond. I excel in 
                implementing complex authentication systems, payment processing, and real-time features.
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Beyond development, I'm passionate about <span className="text-gold-400 font-semibold">mentoring</span> and have helped 
                numerous developers advance their careers. I stay current with emerging technologies, particularly in 
                <span className="text-gold-400 font-semibold"> AI/ML integration</span> and modern development practices.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-block"
              >
                <button className="bg-gold-gradient text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300">
                  Learn More →
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <Card3D className="h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className={`relative ${isDark ? 'bg-black-100' : 'bg-white'} p-6 rounded-lg border ${isDark ? 'border-gold-500/20' : 'border-gold-500/30'} text-center hover:border-gold-400/40 transition-all duration-300 h-full`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-black`}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-gold-400 mb-2">
                      {achievement.title}
                    </h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                      {achievement.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;