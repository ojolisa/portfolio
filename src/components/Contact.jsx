import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { personal, social } = portfolioData;

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Code, url: social.leetcode, label: 'LeetCode' },
    { icon: Twitter, url: social.twitter, label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="section-header">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or just having a friendly chat
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's start a conversation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.label}</div>
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Follow me on social media</h4>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800">Available for new projects</span>
                </div>
                <p className="text-green-700 text-sm">
                  I'm currently open to freelance opportunities and full-time positions. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
