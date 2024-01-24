import React from "react";

const ProjectItem = ({img, title}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt={title} className="rounded-xl group-hover:opacity-10"/>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default ProjectItem