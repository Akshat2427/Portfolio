import React from "react";

function ProjectDisplay({ images, titles, descriptions, techStacks, demo, github }) {
  const projects = [];
  for (let i = 0; i < images.length; i++) {
    projects.push({
      image: images[i],
      title: titles[i],
      description: descriptions[i],
      techStack: techStacks[i],
      demo: demo[i],
      github: github[i],
    });
  }

  return (
    <div className="bg-black p-10 text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Recent Projects</h1>
      <p className="text-lg mb-8 text-gray-300">
        Below you can see some examples of my recent work. Check out my complete portfolio.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg  overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-black text-left">{project.title}</h2>
              <p className="text-gray-700 mt-2  text-left">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                   <button className="mt-4 bg-black text-white px-4 py-2 rounded-full">
                View Project →
              </button>
                </a>
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full"
                >
                  Code
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDisplay;