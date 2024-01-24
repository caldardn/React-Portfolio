import React from "react";
import ProjectItem from "./ProjectItem";
import lofiImg from "../assets/chrome.png";
import travelImg from "../assets/chrome.png";
import textImg from "../assets/chrome.png";
import noteImg from "../assets/chrome.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        recusandae dolore sapiente exercitationem, quis cum. Consequuntur,
        totam? Eum, praesentium aperiam quidem dolorem natus odit explicabo iure
        maiores, tempore, ad quos!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={lofiImg} title="Lofi App" />
        <ProjectItem img={travelImg} title="Travel-Blog App" />
        <ProjectItem img={textImg} title="Text-Editor App" />
        <ProjectItem img={noteImg} title="Note-Taker App" />
      </div>
    </div>
  );
};

export default Project;
