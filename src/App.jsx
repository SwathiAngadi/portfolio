import React from "react";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
