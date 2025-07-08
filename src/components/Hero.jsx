import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ChevronDown, Download, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const { personal, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Code, url: social.leetcode, label: 'LeetCode' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <div className="flex justify-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center max-w-4xl"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                <MapPin size={16} />
                {personal.location}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Hi, I'm{' '}
                <span className="text-gradient">{personal.name}</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 min-h-[3rem] flex items-center justify-center">
                <TypingAnimation 
                  titles={personal.typingTitles}
                  typingSpeed={150}
                  deletingSpeed={75}
                  pauseTime={2000}
                />
              </h2>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                {personal.subtitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
              <motion.a
                href={portfolioData.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline flex items-center gap-2"
                onClick={() => {
                  // Track download analytics if needed
                  if (window.gtag) {
                    window.gtag('event', 'resume_download', {
                      event_category: 'engagement',
                      event_label: 'resume_pdf_hero'
                    });
                  }
                }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
