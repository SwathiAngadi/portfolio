import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import react from './../assets/icons/react.png';
import redux from './../assets/icons/redux.svg';
import javascript from './../assets/icons/java-script.png';
import jquery from './../assets/icons/jquery.svg';
import next from './../assets/icons/nextjs.webp';
import typescript from './../assets/icons/typescript.png'
import html5 from './../assets/icons/html-5.png';
import css3 from './../assets/icons/css-3.png';
import sass from'./../assets/icons/sass.png';
import fmotion from './../assets/icons/framer.png';
import tailwindcss from './../assets/icons/tailwind.png';
import git from './../assets/icons/git.png';
import github from './../assets/icons/github.png';
import npm from './../assets/icons/npm.png';
import vscode from './../assets/icons/vscode.svg';
import chart from './../assets/icons/chartjs.ico';
import vite from './../assets/icons/vite.svg';

import jpmc from './../assets/jpmc.png';
import sony from './../assets/sony.png';
import torryharris from './../assets/torryharris.png';
import cnetric from './../assets/cnetric.png';

export default function Experience(){    
    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }
      function openResume(){        
        window.open("/Swathi_Resume.pdf", "_blank");         
       }
       
      return (
       <section id="experience" >
        <div className="grid grid-cols-2 p-5">   
        <div>
         <h1 className="text-xl text-center uppercase text-black p-4">Some technologies and tools I worked with</h1>  
         <div className="grid grid-cols-3 md:grid-cols-6 items-center">          
            {[react,next,redux,typescript,javascript, tailwindcss,fmotion,jquery,html5,css3,sass,git,github,npm,vscode,chart,vite].map((src)=>{
                return <motion.img key={src} className="p-4 w-24" src={src} initial= {{opacity:0.5}}
                whileHover={{opacity:1}} ></motion.img>
            })} 
        </div>
        </div>
    <div >
        <h1 className="text-center text-xl text-black p-4 uppercase">where i've worked</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
        { [jpmc,sony,torryharris,cnetric].map((company)=>
            {
                return <motion.img className="m-auto w-25 md:w-40" key={company}  whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }} src={company}/> 
            })
        }
        </div>
       
    </div>
    </div>
    <section id="resume" className="relative flex flex-col items-center gap-4">
        
     <div className="absolute inset-0 bg-black/40" />
       <h1 className="text-3xl text-center uppercase z-10">check out my resume</h1>
       <button className="border z-11 p-2" onClick={openResume}> Grab A Copy </button>
     </section>   
    </section>
      
    )
}