import React from "react";
import ProjectItem from "./ProjectItem";
import lofiImg from "../assets/Lofi_v2.jpg";
import travelImg from "../assets/Travel.png";
import textImg from "../assets/Text.jpg";
import noteImg from "../assets/notetaking.jpeg";
import profile from "../assets/Profile.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects and About Me
      </h1>
      <div className="flex justify-center p-4">
        <img
          className="w-64 h-64 rounded-full"
          src={profile}
          alt="Profile picture"
        />
      </div>
      <p className="text-center py-8">
        I am a reliable and detail-oriented QA Auditor II seeking to advance my
        career as a Junior Web Developer. I possess a diverse background of
        clinical laboratory and QA auditing experiences through which I have
        gained several valuable skills in GCP audits, managing complex
        relationships, and juggling priorities. I am a motivated team player
        that excels in communication, problem solving, and time management.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={lofiImg}
          title="Lofi App"
          link="https://emk2473.github.io/calliope-commonplace/"
          imgWidth="448"
          imgHeight="336"
        />
        <ProjectItem
          img={travelImg}
          title="Travel-Blog App"
          link="https://guarded-plateau-06638-3f412fce1c4c.herokuapp.com/"
        />
        <ProjectItem
          img={textImg}
          title="Text-Editor App"
          link="https://github.com/caldardn/Text-Editor"
        />
        <ProjectItem
          img={noteImg}
          title="Note-Taker App"
          link="https://github.com/caldardn/Note-Taker"
        />
      </div>
    </div>
  );
};

export default Project;
