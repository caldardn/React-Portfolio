import React from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("main");
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div id="hamburgerTab">
      <AiOutlineMenu size={30}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div id="sideNav" className="sm:hidden md:block fixed top-[25%] left-[-1.0%] z-10 ">
        <div className="flex flex-col  ">
          <a
            href="#main"
            onClick={() => setActiveLink("main")}
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              activeLink === "main" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <div className="group-hover:opacity-100 transition-opacity">
              <AiOutlineHome size={20} />
            </div>
            <div className="pl-2 text-xs">
              Home
            </div>
          </a>

          <a
            href="#projects"
            onClick={() => setActiveLink("projects")}
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              activeLink === "projects" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <div>
              <AiOutlineProject size={20} />
            </div>
            <div className="pl-1 text-xs">
              Projects/Me
            </div>
          </a>

          <a
            href="#work"
            onClick={() => setActiveLink("work")}
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              activeLink === "work" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <div className="group-hover:opacity-100 transition-opacity">
              <GrProjects size={20} />
            </div>
            <div className="pl-2 text-xs">
              Resume
            </div>
          </a>

          <a
            href="#contact"
            onClick={() => setActiveLink("contact")}
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              activeLink === "contact" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <div>
              <AiOutlineMail size={20} />
            </div>
            <div className="pl-2 text-xs">
              Contact
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
