import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MouseContext } from "./context/MouseContext";
import { Link } from "react-scroll"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div
      id="NavBarPersonal"
      className="bg-[#0f0f0f] text-white flex items-center justify-between px-8 py-4 shadow-md"
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      <div className="text-4xl">
        <NavLink to="/" className="hover:text-[#f1c40f] font-mono">
       {"<sync/>"}
        </NavLink>
      </div>

      <div className="block lg:hidden absolute right-0">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none px-3 py-2 rounded"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className={`absolute top-20 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-start opacity-100 transition-all duration-500 ease-in-out z-10 lg:static lg:flex lg:flex-row lg:space-x-12 lg:h-auto lg:bg-transparent lg:w-auto lg:mx-[-400px] lg:p-0 font-mono space-y-8 lg:space-y-0 pt-64`}
      >
        <Link
         to="Landing"
         smooth={true}
         duration={500}
         className="hover:text-[#f1c40f] transition-colors duration-300 block lg:inline-block cursor-pointer"
          onClick={handleCloseMenu}
        >
          home.
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={600}
          className="hover:text-[#f1c40f] transition-colors duration-300 block lg:inline-block cursor-pointer"
          onClick={handleCloseMenu}
        >
          about me.
        </Link>

     
        <Link
           to="projects"
           smooth={true}
           duration={900}
          className="hover:text-[#f1c40f] transition-colors duration-300 block lg:inline-block cursor-pointer"
          onClick={handleCloseMenu}
        >
          projects.
        </Link>

       
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="hover:text-[#f1c40f] transition-colors duration-300 block lg:inline-block cursor-pointer"
          onClick={handleCloseMenu}
        >
          contact.
        </Link>
      </motion.div>
    </div>
  );
};

export default NavBar;
