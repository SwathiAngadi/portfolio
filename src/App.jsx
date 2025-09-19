import React from "react";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Reordering from "./components/Reordering.tsx";
import CardGrid from "./components/CardGrid.jsx";
import Contact from "./components/Contacts.jsx";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
