import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Portfolio Website", description: "Built with React, Tailwind & Framer Motion", link: "#" },
  { name: "Todo App", description: "React + LocalStorage", link: "#" },
  { name: "E-commerce UI", description: "Responsive UI design using Tailwind CSS", link: "#" },
];

const Projects = () => {
  return (
    <section id="work" className="p-10 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
