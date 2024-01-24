import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      
    }}
    >

      <div className=""></div>
      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-white flex justify-center">I'm David Caldarone</h1>
        <h2 className="text-white sm:text-3xl text-2xl pt-4 text-grey-800">
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
        <div className="text-white flex justify-between space-x-7 pt-6 max-w-[100px] w-full">
          <a href="https://github.com/caldardn" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer" size={50} />
          </a>
          <a href="https://www.linkedin.com/in/david-caldarone-051563125/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer" size={50} />
          </a>
          <a href="https://www.facebook.com/David.WaitForIt.Caldarone" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="cursor-pointer" size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;