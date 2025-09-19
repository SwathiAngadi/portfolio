import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
export default function About() {
  return (
    <section id="about" className="p-10 relative ">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute w-[150%] h-[150%] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-30"
          animate={{
            x: ["0%", "50%", "0%"],
            y: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <motion.h2
        className="text-3xl mb-6 text-center uppercase text-black"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
       A little bit about me
      </motion.h2>
      <div className="flex flex-col-2 max-w-6xl">
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img src={profileImage} className="w-40 md:w-50 rounded-lg shadow-lg"/>
      </motion.div>
      
      <motion.p
        className="max-w-2xl mx-auto text-justify text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I am a developer with 5+ years of experience creating scalable and user-friendly applications using React, Redux, and modern JavaScript frameworks. I’ve worked with companies like JP Morgan Chase, Sony, and Torry Harris, where I built reusable UI components, optimized performance, and delivered high-quality features that improved user experience.
        In 2022, I took a career break due to relocation. During this time, I stayed connected with the tech world by building side projects (like an AI-powered recipe app and a puzzle game), exploring new tools like Tailwind CSS and Framer Motion, and sharpening my design skills with Figma.
        Now, I’m excited to bring my refreshed perspective, problem-solving mindset, and technical expertise back into a collaborative team where I can contribute to building impactful digital products.

      </motion.p>

      </div>
      
    </section>
  );
};


