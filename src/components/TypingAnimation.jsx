import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  titles = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = ""
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (titles.length === 0) return;

    const currentTitle = titles[currentTitleIndex];
    
    let timeout;

    if (isWaiting) {
      // Pause before starting to delete
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting) {
      // Deleting characters
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentTitle.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      // Typing characters
      if (currentText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, start waiting period
        setIsWaiting(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTitleIndex, isDeleting, isWaiting, titles, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-blue-600">|</span>
    </span>
  );
};

export default TypingAnimation;
