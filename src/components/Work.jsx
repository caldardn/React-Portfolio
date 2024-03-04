import React from "react";
import WorkItem from "./WorkItem";
import pdf from "../assets/Resume.pdf"; 

const data = [
  {
    year: "2023-2024",
    title: "Full Stack Developer Student",
    duration: "6 months",
    details:
      "I am currently enrolled in the Full Stack Developer program at University of Richmond. I am learning MERN stack, HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, and Git. I am on track to complete my certificate by the end of February 2024.",
  },
  {
    year: "2021-Present",
    title: "QA Auditor II",
    duration: "2 years",
    details:
      "I conduct complex internal and external audits and inspections to ensure compliance with established quality assurance processes, standards, global regulatory guidelines, and client contractual obligations",
  },
  {
    year: "2020-2021",
    title: "Scientist",
    duration: "1.5 years",
    details:
      "Reviewed analyst documentation to ensure proper execution of methods and protocols. Entered and compiled data to produce well-organized interim and final reports to be sent to clients ",
  },
  {
    year: "2018-2020",
    title: "Associate Scientist",
    duration: "2 years",
    details:
      "Maintained efficient managing and tracking of thousands of clinical samples through the use of Excel, PPDs LIMS, and TrackWise. Also held an essential role in a project in which the processing, testing, and data analysis of 3,000 clinical samples were successfully completed within one month",
  },
  {
    year: "2017-2018",
    title: "Assistant Scientist",
    duration: "1.5 years",
    details:
      "Performed a variety of complex sample preparation and analysis procedures to quantitatively measure pharmaceutical and biopharmaceutical compounds in a variety of formulations and/or biological matrices.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto dc:pl-20 p-4 py-16 ">
      <h1 className="text-4xl p-4 font-bold text-center text-[#001b5e]">Resume</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
      <a href={pdf} className="bg-[#001b5e] text-white mt-4 w-fell p-4 rounded-lg">
            Download Resume
        </a>
    </div>
    
  );
  
};

export default Work;
