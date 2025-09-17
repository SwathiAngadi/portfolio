import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
const About = () => {
  return (
    <section id="about" className="p-10 bg-gray-100">
       <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img src={profileImage} className="w-64 md:w-80 rounded-lg shadow-lg"/>
      </motion.div>
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-center text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I am a developer with 5+ years of experience creating scalable and user-friendly applications using React, Redux, and modern JavaScript frameworks. I’ve worked with companies like JP Morgan Chase, Sony, and Torry Harris, where I built reusable UI components, optimized performance, and delivered high-quality features that improved user experience.
In 2022, I took a career break to focus on personal growth and relocation. During this time, I stayed connected with the tech world by building side projects (like an AI-powered recipe app and a puzzle game), exploring new tools like Vite and Framer Motion, and sharpening my design skills with Figma.
Now, I’m excited to bring my refreshed perspective, problem-solving mindset, and technical expertise back into a collaborative team where I can contribute to building impactful digital products.

      </motion.p>
    </section>
  );
};

export default About;
