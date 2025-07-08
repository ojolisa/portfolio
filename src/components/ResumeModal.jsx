import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, FileText, X, ExternalLink, Clock, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ResumeModal = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    // Track download analytics
    if (window.gtag) {
      window.gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'resume_pdf_modal'
      });
    }
    
    // Trigger download
    const link = document.createElement('a');
    link.href = portfolioData.social.resume;
    link.download = `${portfolioData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl z-51 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">My Resume</h3>
                  <p className="text-gray-600 text-sm">Professional overview and experience</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Resume Preview Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-yellow-500" size={16} />
                  <span className="font-medium text-gray-900">What's included:</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Professional Experience
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Technical Skills
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Project Portfolio
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Education & Certifications
                  </div>
                </div>
              </div>

              {/* File Info */}
              <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <FileText className="text-blue-600" size={18} />
                  <div>
                    <div className="font-medium text-gray-900">Resume.pdf</div>
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock size={12} />
                      Last updated {new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  PDF
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 btn btn-primary flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </motion.button>
                
                <motion.a
                  href={portfolioData.social.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 btn btn-secondary flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Open in New Tab
                </motion.a>
              </div>

              {/* Additional Note */}
              <div className="text-center text-sm text-gray-500 pt-2">
                <p>
                  The resume includes comprehensive details about my professional background,
                  technical expertise, and notable achievements.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
