import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"
import bgImage from '../assets/bg2.jpg';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{ backgroundImage: `url(${bgImage})` }} className="h-screen bg-cover bg-center flex flex-col-2 justify-center items-center">
      <div className="absolute inset-0 bg-black/50 z-0"></div>       
       <motion.div
        className="relative z-10 flex-1 max-w-2xl text-center mt-10 md:mt-0 justify-center"
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
        className="text-xl text-center text-white  items-center justify-center leading-relaxed mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
     Front-End Developer building interactive, responsive, and user-friendly web applications.
After a career break, I’ve returned with expertise in React, JavaScript, Tailwind CSS, and Framer Motion. 

      </motion.p>
      <Link
        to="about"      // target section id
        smooth={true}
        duration={600}
        offset={-70}    // adjust for navbar height
        className="cursor-pointer mt-12"
      >
        <motion.div
          className="grid justify-center items-center text-gray-500  mt-20 hover:text-white transition"
          initial={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
         <ChevronDown size={50}/>
        </motion.div>
      </Link>
      </motion.div>
      </section>
  );
};

