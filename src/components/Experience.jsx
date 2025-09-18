import { motion } from "framer-motion";
import react from './../assets/icons/react.png';
import redux from './../assets/icons/redux.svg';
import javascript from './../assets/icons/java-script.png';
import jquery from './../assets/icons/jquery.png';
import html5 from './../assets/icons/html-5.png';
import css3 from './../assets/icons/css-3.png';
import sass from'./../assets/icons/sass.png';
import fmotion from './../assets/icons/react.png';
import tailwindcss from './../assets/icons/redux.svg';
import git from './../assets/icons/git.png';
import github from './../assets/icons/github.png';
import npm from './../assets/icons/npm.png';
import vscode from './../assets/icons/vscode.jpg';
import chart from './../assets/icons/chartjs.ico';
import vite from './../assets/icons/vite.png';

import jpmc from './../assets/jpmc.jpg';
import sony from './../assets/sony.png';
import torryharris from './../assets/torryharris.png';
import cnetric from './../assets/cnetric.jpg';

export default function Experience(){    
    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }
      return (
        <section id="experience" className="relative grid grid-cols-2 p-10">
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
            <div>
             <h1 className="text-xl text-center uppercase text-black p-4">Some technologies and tools I worked with</h1>  
             <div className="grid sm:grid-cols-2 md:grid-cols-6 ">          
                {[react,redux,javascript, tailwindcss,fmotion,jquery,html5,css3,sass,git,github,npm,vscode,chart,vite].map((src)=>{
                    return <motion.img key={src} className="p-4 w-24" src={src} initial= {{opacity:0.5}}
                    whileHover={{opacity:1}} ></motion.img>
                })} 
            </div>
            </div>
        <div >
            <h1 className="text-center text-xl text-black p-4 uppercase">where i've worked</h1>
            <div className="grid grid-cols-2 mt-5 ml-10">
            { [jpmc,sony,torryharris,cnetric].map((company)=>
                {
                    return <motion.img className="m-auto w-40" key={company}  whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }} src={company}/> 
                })
            }
            </div>
           
        </div>
        </section>
        
    )
}