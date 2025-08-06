import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFocused, setIsFocused] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const handleFocus = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setFormErrors({});
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "wintan1418@gmail.com",
      link: "mailto:wintan1418@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+234 814 580 4206",
      link: "tel:+2348145804206"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Nigeria (Remote Available)",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername"
    }
  ];

  // Sparkle animation variants
  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-black min-h-screen relative overflow-hidden">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={sparkleVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black-100 to-black opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            variants={floatingVariants}
            animate="animate"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <Star className="w-8 h-8 text-gold-400 animate-pulse" />
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black-100 rounded-2xl shadow-2xl p-8 border border-gold-600/20 hover:border-gold-500/40 transition-all duration-500 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-2xl"></div>
              
              <motion.h3 
                className="text-3xl font-bold mb-8 gradient-text relative z-10"
                variants={floatingVariants}
                animate="animate"
              >
                Send me a message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gold-300 mb-3 uppercase tracking-wider">
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-6 py-4 bg-black border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      isFocused.name || formData.name 
                        ? 'border-gold-500 shadow-[0_0_20px_rgba(255,215,0,0.3)]' 
                        : 'border-gray-700 hover:border-gold-600'
                    }`}
                    placeholder="Your name"
                  />
                  {isFocused.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                    </motion.div>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-gold-300 mb-3 uppercase tracking-wider">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-6 py-4 bg-black border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      isFocused.email || formData.email 
                        ? 'border-gold-500 shadow-[0_0_20px_rgba(255,215,0,0.3)]' 
                        : 'border-gray-700 hover:border-gold-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {isFocused.email && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                    </motion.div>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gold-300 mb-3 uppercase tracking-wider">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-6 py-4 bg-black border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-vertical ${
                      isFocused.message || formData.message 
                        ? 'border-gold-500 shadow-[0_0_20px_rgba(255,215,0,0.3)]' 
                        : 'border-gray-700 hover:border-gold-600'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  ></motion.textarea>
                  {isFocused.message && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                    </motion.div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,215,0,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-gold-500 hover:to-gold-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,215,0,0.3)] relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                  Send Message
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-pulse group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.h3 
                className="text-3xl font-bold mb-8 gradient-text"
                variants={floatingVariants}
                animate="animate"
              >
                Contact Information
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-6 p-6 bg-black-100 rounded-2xl border border-gold-600/20 hover:border-gold-500/60 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-500 relative overflow-hidden">
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <motion.div 
                        className="text-gold-400 bg-gold-600/20 p-4 rounded-xl border border-gold-600/30 relative z-10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-gold-300 text-lg mb-1">{info.title}</h4>
                        {info.link ? (
                          <motion.a
                            href={info.link}
                            whileHover={{ x: 5 }}
                            className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <p className="text-gray-300 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                className="text-3xl font-bold mb-8 gradient-text"
                variants={floatingVariants}
                animate="animate"
              >
                Follow me
              </motion.h3>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 0 25px rgba(255,215,0,0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gold-600 to-gold-400 p-4 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] text-black hover:from-gold-500 hover:to-gold-300 transition-all duration-300 group relative overflow-hidden"
                  >
                    {social.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              variants={floatingVariants}
              animate="animate"
              className="relative group"
            >
              <div className="bg-gradient-to-r from-gold-600/20 to-gold-400/20 p-8 rounded-2xl border border-gold-500/40 hover:border-gold-400/60 transition-all duration-500 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 via-transparent to-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-6 h-6 text-gold-400" />
                </motion.div>
                
                <h4 className="font-bold text-gold-300 text-xl mb-4 relative z-10">
                  Let's work together!
                </h4>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  I'm currently available for freelance work and open to discussing 
                  full-time opportunities. Whether you have a project in mind or just 
                  want to connect, I'd love to hear from you.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;