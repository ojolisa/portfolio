import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: social.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  {personal.name}
                </h3>
                <p className="text-gray-300 max-w-md leading-relaxed">
                  {personal.title} passionate about creating amazing digital experiences 
                  and solving complex problems through clean, efficient code.
                </p>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {personal.email}
                  </a>
                </p>
                <p>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {personal.phone}
                  </a>
                </p>
                <p>{personal.location}</p>
              </div>
              
              {/* Availability Status */}
              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">Available for work</span>
                </div>
                <p className="text-green-300 text-xs">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                © {new Date().getFullYear()} {personal.name}. Made using React & Vite
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                Back to top
              </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
