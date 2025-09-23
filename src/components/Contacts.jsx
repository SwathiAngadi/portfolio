import { Contact , ArrowBigUpDash } from "lucide-react";
import {motion} from 'framer-motion';

export default function Contacts() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // keeps smooth scroll
    });
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-12 gap-8"
    >
      {/* Heading */}
      <Contact size={50} />
      <h2 className="text-3xl uppercase text-center">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-300 text-center max-w-xl">
        I'm currently open to new opportunities and collaborations. Whether you
        have a question, a project idea, or just want to say hi — I’ll try my
        best to get back to you!
      </p>

      {/* Buttons */}
      <div className="flex gap-6 flex-wrap justify-center">
        {/* Send Mail Button */}
        <a
          href="mailto:angadiswathi119@gmail.com?subject=Hello&body=Hi, I’d like to get in touch!"
          className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
        >
          Send Me Mail
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/swathi-angadi-150021105/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SwathiAngadi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-gray-500 text-gray-400 rounded-lg hover:bg-gray-500 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
      <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="mt-10"
        >
        <ArrowBigUpDash size={30} />
        </motion.button>
    </section>
  );
}
