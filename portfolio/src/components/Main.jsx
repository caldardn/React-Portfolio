import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background image"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/80"></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>I'm David Caldarone</h1>
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
      </div>
    </div>
  );
};

export default Main;
