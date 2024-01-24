import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background image"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">I'm David Caldarone</h1>
        <h2>
          I'm a
          <TypeAnimation
            sequence={[
              "Coder",
              1000,
              "Developer",
              1000,
              "Hard Worker",
              1000,
              "Critical Thinker",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", padding: "5px" }}
            repeat={Infinity}
          />
        </h2>
        <div> 
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Main;
