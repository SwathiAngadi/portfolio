import React from "react";
export default function Resume() {
    function openResume(){        
     window.open("/Swathi_Resume.pdf", "_blank");         
    }
  return (
   
      <section id="resume" className="relative flex flex-col items-center gap-4">
      <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-3xl text-center uppercase z-10">check out my resume</h1>
        <button className="border z-11 p-2" onClick={openResume}> Grab A Copy </button>
      </section>      
  
  );
}
