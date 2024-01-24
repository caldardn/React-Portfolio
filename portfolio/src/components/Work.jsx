import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2021",
    title: "Project 1",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    year: "2021",
    title: "Project 2",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    year: "2021",
    title: "Project 3",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    year: "2021",
    title: "Project 4",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    year: "2021",
    title: "Project 5",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    year: "2021",
    title: "Project 6",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
