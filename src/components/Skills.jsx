import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code,
      color: 'blue',
      skills: portfolioData.skills.frontend,
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Database,
      color: 'green',
      skills: portfolioData.skills.backend,
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: Wrench,
      color: 'purple',
      skills: portfolioData.skills.tools,
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: Languages,
      color: 'orange',
      skills: portfolioData.skills.languages,
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-600' : 'bg-blue-100',
        text: isActive ? 'text-white' : 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-50',
      },
      green: {
        bg: isActive ? 'bg-green-600' : 'bg-green-100',
        text: isActive ? 'text-white' : 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-50',
      },
      purple: {
        bg: isActive ? 'bg-purple-600' : 'bg-purple-100',
        text: isActive ? 'text-white' : 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-50',
      },
      orange: {
        bg: isActive ? 'bg-orange-600' : 'bg-orange-100',
        text: isActive ? 'text-white' : 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-50',
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="section-padding">
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
            <h2 className="section-header">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              const colorClasses = getColorClasses(category.color, isActive);
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 border ${
                    colorClasses.bg
                  } ${colorClasses.text} ${colorClasses.border} ${
                    !isActive && colorClasses.hover
                  } ${isActive ? 'shadow-lg scale-105' : 'hover:scale-105'}`}
                >
                  <category.icon size={20} />
                  {category.name}
                </button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {skillCategories
              .find((cat) => cat.id === activeCategory)
              ?.skills.map((skill, index) => {
                const category = skillCategories.find((cat) => cat.id === activeCategory);
                const colorClasses = getColorClasses(category.color);
                
                return (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`card text-center group cursor-pointer border-2 ${colorClasses.border} hover:shadow-lg`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 ${colorClasses.bg} ${colorClasses.text} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {skill}
                    </h3>
                  </motion.div>
                );
              })}
          </motion.div>



          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <div className="text-2xl">🚀</div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Ready to work with these technologies?
                </h4>
                <p className="text-gray-600">
                  Let's discuss how I can help bring your project to life
                </p>
              </div>
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
