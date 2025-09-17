import React from "react";
import { motion } from "framer-motion";

import bgImage from '../assets/background.jpg'

const Hero = () => {
  return (
    <section id="hero" style={{ backgroundImage: `url(${bgImage})` }} className="h-screen bg-cover bg-center flex flex-col-2 justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 z-10"></div>
       
       <motion.div
        className="flex-1 mt-10 md:mt-0 justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
      <motion.h1
        className="text-5xl mb-4 text-center text-text uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       Hi, I'm Swathi Angadi
      </motion.h1>
      <motion.p
        className="text-xl text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
     Front-End Developer building interactive, responsive, and user-friendly web applications.
After a career break, I’ve returned with expertise in React, JavaScript, Tailwind CSS, and Framer Motion. 

      </motion.p>
   
      </motion.div>
      </section>
  );
};

export default Hero;
