import {React, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";


import endgame from './../assets/website/endGame.png';
import chefclaude from './../assets/website/chefclaude.png';
import portfolio from './../assets/website/portfolio.png';

const projects = [
  { id: 1, img: portfolio, name: "Portfolio Website", 
  description: `A modern, responsive portfolio to showcase my work and skills.Built with React for modular and 
  maintainable components.Styled using Tailwind CSS for a sleek, professional look. Enhanced with Framer Motion 
  for smooth animations.`, link: "#" },
  { id: 2, img: endgame, name: "End Game", description: `A browser-based game built with React, featuring dynamic 
  gameplay, smooth animations, and responsive design. Showcases my skills in UI design, state management, and creative 
  coding. A single-player game where you guess a word in eight tries or less, with colors indicating if letters are correct`, 
   link: "https://swathiangadi.github.io/EndGame/" },
  { id: 3,img: chefclaude,  name: "Chef Claude", description:`An AI-powered web app that suggests recipes based on ingredients entered by the user. Built with React 
  and AI integration, featuring a clean interface, dynamic suggestions, and interactive user experience. Highlights my skills in frontend development,
   API integration, and user-focused design`, link: "https://chef-claude-swathi.netlify.app/" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
 // let navigate = useNavigate(); 
  function gotToURL(url){
  //  navigate(url);
  window.open(url, "_blank", "noopener,noreferrer");

  }
  return (
    <section id="work" className="p-10 relative">
      <h1 className="text-3xl mb-6 text-center text-black uppercase">What i've done</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
                   <motion.div
                   key={project.id}
                   layoutId={`card-${project.id}`} 
                   onClick={() => setSelectedProject(project)}
                   className="bg-gray-100 shadow-md rounded-2xl p-6 cursor-pointer h-70 hover:shadow-xl transition "
                 >
                  <h3 className="text-lg font-semibold text-center pb-2 text-black">{project.name}</h3>
                  <img  src= {project.img}/>                   
                  </motion.div>
        ))}
              <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0  bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedProject.id}`} 
              className="fixed z-50 top-1/2 left-1/2 h-26/27 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-2xl mb-4 uppercase text-center text-black">{selectedProject.name}</h2>
              <img  src= {selectedProject.img} className=" img-responsive img-centered"/>  
              <p className="text-gray-600 text-center pt-4 text-justify">{selectedProject.description}</p>
              <div className="text-center">
              <button className="p-2 border text-blue-900 m-5">View Source</button> 
              <span className='text-gray-600'>or</span>
              <button className="p-2 border text-blue-900  m-5" onClick={()=>gotToURL(selectedProject.link)}>Visit Site</button>
              </div>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

