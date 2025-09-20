import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? " p-3 bg-black shadow-lg" : "p-6 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl uppercase">swathi angadi</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["about", "experience", "work", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-50} 
                spy={true} 
                activeClass="text-yellow-400 font-semibold"
                className="cursor-pointer hover:text-gray-300 text-sm ml-5"
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 bg-gray-800 p-4 rounded-lg shadow">
        {[ "about", "work", "contact"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      )}
    </nav>
  );
};

