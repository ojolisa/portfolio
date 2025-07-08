import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Download, Eye, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
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
            <h2 className="section-header">Work Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and the experiences that have shaped my career
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== portfolioData.experience.length - 1 && (
                  <div className="absolute left-3 top-8 w-0.5 h-full bg-blue-200"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card group hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-gray-900">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {portfolioData.certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="card group hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  
                  {cert.credentialId && (
                    <p className="text-sm text-gray-600 mb-3">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                    >
                      <span>View Credential</span>
                      <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex flex-col items-center gap-6 px-8 py-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                <FileText size={32} />
              </div>
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-gray-900">
                  Want to see my complete resume?
                </h4>
                <p className="text-gray-600 max-w-md">
                  Download my comprehensive resume for a detailed overview of my experience, 
                  skills, projects, and achievements
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a
                    href={portfolioData.social.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary flex items-center gap-2"
                    onClick={() => {
                      // Track download analytics if needed
                      if (window.gtag) {
                        window.gtag('event', 'resume_download', {
                          event_category: 'engagement',
                          event_label: 'resume_pdf_experience'
                        });
                      }
                    }}
                  >
                    <Download size={18} />
                    Download Resume
                  </motion.a>
                  
                  <motion.a
                    href={portfolioData.social.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <Eye size={18} />
                    Preview Online
                  </motion.a>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  <div className="flex items-center gap-2 justify-center">
                    <FileText size={14} />
                    <span>PDF Format • Last Updated {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
