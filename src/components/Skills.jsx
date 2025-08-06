import { motion } from 'framer-motion';
import { Database, Layout, Settings, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const Skills = () => {
  const { isDark } = useTheme();
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Ruby on Rails", level: 95 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 95 },
        { name: "RESTful APIs", level: 95 },
        { name: "Sanity CMS", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React/Redux", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "JavaScript/ES6+", level: 95 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Heroku/Netlify", level: 90 },
        { name: "Hotwire/Stimulus", level: 90 },
        { name: "TDD/RSpec", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-black-100' : 'bg-white'
    }`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proficient in modern web development technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-black border border-gold-500/20 rounded-xl p-6 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center text-black"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gold-400">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05, 
                        duration: 0.5 
                      }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gold-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-black-300 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gold-gradient relative overflow-hidden"
                        >
                          <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gold-400 mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Material-UI", "Semantic UI", "WordPress", "Zest UI", 
              "AI/LLM Integration", "Machine Learning", "Devise", "Pundit",
              "SolidQueue", "Chrome Dev Tools", "Slack", "Auth0", "OAuth"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  color: "#000000"
                }}
                className="bg-black border border-gold-500/30 text-gold-400 px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-300 hover:border-gold-400"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;