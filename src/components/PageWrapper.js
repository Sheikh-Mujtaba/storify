// src/components/PageWrapper.js
import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  // Define the animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 50,
    damping: 20,
    duration: 0.5,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
