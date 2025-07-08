import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(portfolioData.projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                <p className="text-blue-100">{project.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {project.features && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding">
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
            <h2 className="section-header">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and creativity
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 p-1 bg-gray-100 rounded-xl">
              <Filter size={20} className="text-gray-500 ml-3" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="card group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Header */}
                  <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-blue-100">{project.category}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Eye size={18} className="text-gray-700" />
                        </div>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors"
                          >
                            <ExternalLink size={18} className="text-gray-700" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                          >
                            <Github size={18} className="text-gray-700" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                            title="View on GitHub"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <div className="text-3xl">🚀</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Have a project in mind?
                </h4>
                <p className="text-gray-600 mb-4">
                  Let's work together to bring your ideas to life
                </p>
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
