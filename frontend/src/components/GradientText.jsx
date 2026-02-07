import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GradientTextHero = () => {
  return (
    <>
    <div style={styles.container} className="mt-10 md:mt-0">
      {/* CSS Styles for the animation */}
      <style>
        {`
          @keyframes floatColor {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          
          .floating-color-text {
            /* Create the gradient: Blue -> White -> Blue */
            background: linear-gradient(90deg, #313131 30%, #ffffff 60%, #3b82f6 80%);
            background-size: 200% auto;
            
            /* Clip background to text */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            
            /* Animate the background */
            animation: floatColor 6s linear infinite;
          }
        `}
      </style>

        <header className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" floating-color-text text-5xl md:text-7xl font-bold bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="floating-color-text text-white/40 text-lg md:text-xl max-w-2xl mx-auto"
          >
            My journey through different roles that have shaped my career path and expertise in software development.
          </motion.p>
        </header>

      {/* <div >
        <h1 className="floating-color-text" >
          Connect with your loved ones
        </h1>
        <p className="floating-color-text" >
          Cover a distance by Stream Flow Video Call
        </p>
      </div> */}
      
    {/* <Link to={'/login'} className="px-2 py-2 items-center w-30 cursor-pointer hover:bg-blue-800 flex justify-center mt-5 bg-blue-500 text-white rounded-md">Get Started</Link> */}
    </div>
    </>
  );
};

const styles = {
  
  heading: {
    margin: '0 0 20px 0',
    lineHeight: '1.1',
  },
  subHeading: {
    margin: '0',
  }
};

export default GradientTextHero;