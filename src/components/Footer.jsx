import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex justify-between space-x-7 pt-6 ">
        <a
          href="https://github.com/caldardn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer hover:animate-bounce" size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-caldarone-051563125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer hover:animate-bounce" size={50} />
        </a>
        <a
          href="https://www.facebook.com/David.WaitForIt.Caldarone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="cursor-pointer hover:animate-bounce" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
