import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input className="p-3 border rounded" type="text" placeholder="Name" />
        <input className="p-3 border rounded" type="email" placeholder="Email" />
        <textarea className="p-3 border rounded" placeholder="Message" rows="5"></textarea>
        <button className="p-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
