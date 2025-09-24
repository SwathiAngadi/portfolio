import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

import bg from './../assets/background1.jpg';

export default function ResumeSection() {
  const { scrollY } = useScroll();
  // Background moves at half the scroll speed
  const y = useTransform(scrollY, [0, 500], [0, -400]);

  return (
    <section className="relative h-[50vh] overflow-hidden">
      {/* background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[150%] bg-cover bg-top"
        style={{
          y,
          backgroundImage:`url(${bg})`
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl uppercase">Check out my resume</h1>
        <button
         
          className="mt-4 px-4 py-2 border rounded-md bg-white/10 hover:bg-white/20"
        >
          Grab A Copy
        </button>
      </div>
    </section>
  );
}
