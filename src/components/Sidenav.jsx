import React from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  // const [activeLink, setActiveLink] = useState("");
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div id="hamburgerTab">
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-gray-300/90 flex flex-col justify-center items-center z-20">
          <NavLink
            onClick={handleNav}
            to="/"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
              location.pathname === "/" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </NavLink>
          <NavLink
            onClick={handleNav}
            to="/work"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
              location.pathname === "/work" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </NavLink>
          <NavLink
            onClick={handleNav}
            to="/projects"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
              location.pathname === "/projects" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </NavLink>
          <NavLink
            onClick={handleNav}
            to="/contact"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
              location.pathname === "/contact" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </NavLink>
        </div>
      ) : (
        ""
      )}

      <div
        id="sideNav"
        className="dc:block cd:hidden fixed top-[25%] left-[-1.0%] z-10"
      >
        <div className="flex flex-col">
          <NavLink
            to="/"
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              location.pathname === "/" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <div className="group-hover:opacity-100 transition-opacity">
              <AiOutlineHome size={20} />
            </div>
            <div className="pl-2 text-xs">Home</div>
          </NavLink>

          <NavLink
            to="/projects"
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              location.pathname === "/projects"
                ? "bg-indigo-500 text-white"
                : ""
            }`}
          >
            <div>
              <AiOutlineProject size={20} />
            </div>
            <div className="pl-1 text-xs">Projects/Me</div>
          </NavLink>

          <NavLink
            to="/work"
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              location.pathname === "/work" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <div className="group-hover:opacity-100 transition-opacity">
              <GrProjects size={20} />
            </div>
            <div className="pl-2 text-xs">Resume</div>
          </NavLink>

          <NavLink
            to="/contact"
            className={`flex items-center rounded-full shadow-lg bg-gray-100 m-5 p-2 cursor-pointer hover:scale-110 ease-in duration-200 group ${
              location.pathname === "/contact"
                ? "bg-indigo-500  text-white"
                : ""
            }`}
          >
            <div>
              <AiOutlineMail size={20} />
            </div>
            <div className="pl-2 text-xs">Contact</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
