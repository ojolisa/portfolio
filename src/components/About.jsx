import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Award, Coffee, Code, Download, Eye, FileText, Star, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ResumeModal from './ResumeModal';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const { personal, experience, certifications } = portfolioData;

  const stats = [
    {
      icon: Code,
      label: 'Projects Completed',
      value: portfolioData.projects.length,
    },
    {
      icon: Coffee,
      label: 'Years Experience',
      value: new Date().getFullYear() - 2022, // Adjust based on your start year
    },
    {
      icon: Award,
      label: 'Certifications',
      value: certifications.length,
    },
    {
      icon: User,
      label: 'Happy Clients',
      value: portfolioData.testimonials.length,
    },
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
    <section id="about" className="section-padding bg-gray-50">
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
            <h2 className="section-header">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what drives my passion for development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Hello! I'm {personal.name.split(' ')[0]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {personal.bio}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I believe in continuous learning and staying 
                  up-to-date with the latest industry trends.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  What I bring to the table:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Clean, maintainable code architecture
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Strong problem-solving and analytical skills
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Excellent communication and teamwork
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Passion for learning and innovation
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a href="#contact" className="btn btn-primary">
                  Let's Work Together
                </a>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center group hover:border-blue-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Resume Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-gray-900">Resume</h3>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card group hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  
                  <div className="relative p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Resume Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                            <FileText size={32} />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              My Resume
                            </h4>
                            <p className="text-gray-600 font-medium">
                              Complete professional overview
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          Download my comprehensive resume to learn more about my professional background, 
                          technical skills, work experience, and achievements. It includes detailed information 
                          about my projects, certifications, and career highlights.
                        </p>

                        {/* Resume Highlights */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Star className="text-yellow-500" size={16} />
                            <span className="text-sm">Professional Experience</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Award className="text-blue-500" size={16} />
                            <span className="text-sm">Certifications & Skills</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Code className="text-green-500" size={16} />
                            <span className="text-sm">Technical Projects</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Calendar className="text-purple-500" size={16} />
                            <span className="text-sm">Updated {new Date().toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Download Actions */}
                      <div className="flex flex-col gap-4 lg:items-end">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <motion.a
                            href={portfolioData.social.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary flex items-center gap-2 min-w-[140px] justify-center"
                            onClick={() => {
                              // Track download analytics if needed
                              if (window.gtag) {
                                window.gtag('event', 'resume_download', {
                                  event_category: 'engagement',
                                  event_label: 'resume_pdf'
                                });
                              }
                            }}
                          >
                            <Download size={18} />
                            Download PDF
                          </motion.a>
                          
                          <motion.button
                            onClick={() => setIsResumeModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-secondary flex items-center gap-2 min-w-[140px] justify-center"
                          >
                            <Eye size={18} />
                            Preview
                          </motion.button>
                        </div>

                        {/* File Info */}
                        <div className="text-center lg:text-right text-sm text-gray-500">
                          <div className="flex items-center gap-2 justify-center lg:justify-end">
                            <FileText size={14} />
                            <span>PDF Format • Updated Recently</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Overview Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center group hover:border-blue-200"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Code size={20} />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Technical Skills</h5>
                  <p className="text-gray-600 text-sm">
                    Comprehensive list of programming languages, frameworks, and tools
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center group hover:border-blue-200"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Award size={20} />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Experience</h5>
                  <p className="text-gray-600 text-sm">
                    Detailed work history with achievements and key responsibilities
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center group hover:border-blue-200"
                >
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Star size={20} />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Projects</h5>
                  <p className="text-gray-600 text-sm">
                    Portfolio highlights and notable project achievements
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-gray-900">Education</h3>
            <div className="max-w-4xl mx-auto">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline Line */}
                  {index !== portfolioData.education.length - 1 && (
                    <div className="absolute left-3 top-8 w-0.5 h-full bg-gray-200"></div>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {edu.degree}
                      </h4>
                      <span className="text-blue-600 font-medium">
                        {edu.duration}
                      </span>
                    </div>
                    <div className="text-gray-700 font-medium mb-2">
                      {edu.institution} • {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="text-gray-600 mb-2">GPA: {edu.gpa}</div>
                    )}
                    <p className="text-gray-600 mb-3">{edu.description}</p>
                    {edu.achievements && (
                      <div className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
};

export default About;
