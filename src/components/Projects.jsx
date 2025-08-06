import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real Estate SaaS Platform (Agent Inc)",
      description: "Enterprise-grade multi-tenancy SaaS platform built with Ruby on Rails engines architecture. Features comprehensive CRM, Task Management, and CMS modules with real-time updates using Hotwire/Stimulus. Designed for scalability with PostgreSQL and modern responsive UI using Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      technologies: ["Ruby on Rails", "Rails Engines", "Hotwire", "Stimulus", "PostgreSQL", "Tailwind CSS", "Multi-tenancy"],
      liveUrl: "https://agent-inc-demo.com",
      githubUrl: "https://github.com/oluwadare/agent-inc-saas",
      featured: true
    },
    {
      title: "AI Image Generator (88stacks)",
      description: "Cutting-edge Rails application leveraging Stable Diffusion API for AI-powered image generation. Features webhook integration for real-time processing, background job queues for performance optimization, and advanced prompt engineering capabilities for high-quality image synthesis.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
      technologies: ["Ruby on Rails", "Stable Diffusion API", "Webhooks", "Background Jobs", "Redis", "Sidekiq"],
      liveUrl: "https://88stacks-ai-generator.com",
      githubUrl: "https://github.com/oluwadare/88stacks-ai-generator",
      featured: true
    },
    {
      title: "Calorie Tracker",
      description: "Full-stack nutrition tracking application with React/Redux frontend and Rails API backend. Features secure authentication via Auth0, real-time calorie calculation, macro tracking, and comprehensive nutrition analytics dashboard.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Redux", "Ruby on Rails API", "Auth0", "PostgreSQL"],
      liveUrl: "https://calorie-tracker-demo.com",
      githubUrl: "https://github.com/oluwadare/calorie-tracker",
      featured: false
    },
    {
      title: "Finance Tracker",
      description: "Sophisticated stock tracking application built with Ruby on Rails. Integrates with IEX Cloud API for real-time market data, portfolio management, and financial analytics. Features responsive Bootstrap UI with interactive charts and investment insights.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center",
      technologies: ["Ruby on Rails", "IEX API", "Bootstrap", "Chart.js", "PostgreSQL"],
      liveUrl: "https://finance-tracker-demo.com",
      githubUrl: "https://github.com/oluwadare/finance-tracker",
      featured: false
    },
    {
      title: "Twitter Redesign (Crypto Platform)",
      description: "Twitter-inspired social platform specifically designed for cryptocurrency discussions and market analysis. Built with Rails backend and custom SCSS styling with Bootstrap components. Features real-time feeds, crypto sentiment analysis, and community-driven market insights.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&crop=center",
      technologies: ["Ruby on Rails", "SCSS", "Bootstrap", "JavaScript", "PostgreSQL"],
      liveUrl: "https://crypto-twitter-demo.com",
      githubUrl: "https://github.com/oluwadare/crypto-twitter-redesign",
      featured: false
    },
    {
      title: "Chat App (Highpoint)",
      description: "Modern real-time chat application built with Stimulus and Hotwire for seamless user experience. Features joinable chat rooms, file upload capabilities, and instant messaging with WebSocket connections for real-time communication.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&crop=center",
      technologies: ["Stimulus", "Hotwire", "Ruby on Rails", "WebSockets", "Action Cable"],
      liveUrl: "https://highpoint-chat-demo.com",
      githubUrl: "https://github.com/oluwadare/highpoint-chat",
      featured: false
    },
    {
      title: "Location Matcher (Luke LLC)",
      description: "Advanced location-based matching service integrating Yelp and Google APIs. Built with Rails and Bootstrap, this application provides intelligent location recommendations, business matching, and geographic data analysis for enhanced user discovery.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop&crop=center",
      technologies: ["Ruby on Rails", "Bootstrap", "Yelp API", "Google Maps API", "Geocoding"],
      liveUrl: "https://luke-llc-location-matcher.com",
      githubUrl: "https://github.com/oluwadare/location-matcher",
      featured: false
    },
    {
      title: "Email AI Assistant (88stacks)",
      description: "Intelligent email automation platform powered by OpenAI integration. Features smart email composition, automated responses, sentiment analysis, and workflow automation. Built with Rails for robust backend processing and AI-driven email management.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&crop=center",
      technologies: ["Ruby on Rails", "OpenAI API", "Email Automation", "Background Jobs", "PostgreSQL"],
      liveUrl: "https://88stacks-email-ai.com",
      githubUrl: "https://github.com/oluwadare/email-ai-assistant",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // Floating animation keyframes
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Sparkle animation
  const sparkleAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={sparkleAnimation}
          className="absolute top-10 left-10 text-gold-400 opacity-30"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
        <motion.div
          animate={{...sparkleAnimation, transition: {...sparkleAnimation.transition, delay: 1}}}
          className="absolute top-32 right-20 text-gold-300 opacity-40"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{...sparkleAnimation, transition: {...sparkleAnimation.transition, delay: 0.5}}}
          className="absolute bottom-20 left-32 text-gold-500 opacity-20"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{...sparkleAnimation, transition: {...sparkleAnimation.transition, delay: 1.5}}}
          className="absolute bottom-40 right-10 text-gold-400 opacity-35"
        >
          <Sparkles className="w-3 h-3" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            animate={floatingAnimation}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6 relative"
          >
            Featured Projects
            <div className="absolute -top-2 -right-2">
              <motion.div animate={sparkleAnimation}>
                <Sparkles className="w-6 h-6 text-gold-400" />
              </motion.div>
            </div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Showcasing my latest work and technical expertise with premium craftsmanship
          </motion.p>
        </motion.div>

        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-black-100 rounded-xl border border-gold-300/20 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          className="bg-black border-2 border-gold-400 p-3 rounded-full shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 transition-all duration-300 hover:bg-gold-400/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 text-gold-400" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          className="bg-black border-2 border-gold-400 p-3 rounded-full shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 transition-all duration-300 hover:bg-gold-400/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 text-gold-400" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-4 relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                    <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 w-full"></div>
                  </motion.h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-black-100 border border-gold-300/30 text-gold-300 px-4 py-2 rounded-full text-sm font-medium hover:border-gold-400 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-bold hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/30 hover:shadow-gold-400/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-lg font-bold hover:bg-gold-400/10 hover:border-gold-300 transition-all duration-300 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h3 
            animate={floatingAnimation}
            className="text-3xl font-bold gradient-text text-center mb-12 relative"
          >
            Other Projects
            <div className="absolute -top-1 -right-6">
              <motion.div animate={{...sparkleAnimation, transition: {...sparkleAnimation.transition, delay: 0.7}}}>
                <Sparkles className="w-5 h-5 text-gold-400" />
              </motion.div>
            </div>
          </motion.h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-black-100 border border-gold-300/20 rounded-xl overflow-hidden hover:border-gold-400/50 transition-all duration-500 shadow-xl shadow-black/50 hover:shadow-gold-400/20">
                <div className="relative group/image overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-600/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover/image:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/image:translate-y-0 flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="bg-black border-2 border-gold-400 p-2 rounded-full shadow-lg hover:bg-gold-400/10 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 text-gold-400" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="bg-black border-2 border-gold-400 p-2 rounded-full shadow-lg hover:bg-gold-400/10 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 text-gold-400" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <motion.h4 
                    className="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="bg-black border border-gold-300/30 text-gold-300 px-2 py-1 rounded text-xs font-medium hover:border-gold-400 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gold-400 text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;