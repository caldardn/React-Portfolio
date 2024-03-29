import React from "react";

const ProjectItem = ({img, title, link}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt={title} className="rounded-xl object-cover group-hover:opacity-10 w-full h-full"/>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl p-2 font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg transform hover:scale-110 ease-in duration-200">More Info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem