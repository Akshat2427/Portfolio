import React from "react";

function ProjectLayout({ image, title, description , techStack }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black p-4">
      <div className="group relative hover:z-20 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white shadow-lg rounded-lg w-full z-10 transition-transform duration-300 group-hover:scale-105 relative">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-mono leading-relaxed">
              {description}
            </p>
            <div className=" my-2 bg-gray-400 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-red-500">
            {techStack}
        </div>

          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
