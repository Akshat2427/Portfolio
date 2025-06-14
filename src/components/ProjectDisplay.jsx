import React from "react";

function ProjectDisplay({
  images,
  titles,
  descriptions,
  techStacks,
  demo,
  github,
}) {
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
    <div className="bg-black min-h-screen p-10 text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Recent Projects</h1>
      <p className="text-lg mb-8 text-gray-300">
        Below you can see some examples of my recent work. Check out my complete
        portfolio.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flip-card group perspective">
            <div className="flip-card-inner group-hover:rotate-y-180 transition-transform duration-500 w-full" style={{ height: "auto", minHeight: 420 }}>
              {/* Front */}
              <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-[#f5f5f7]">
                {/* Mac window bar */}
                <div className="flex items-center px-4 py-2 bg-[#e0e0e0] border-b border-gray-300 relative">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2 flex items-center justify-center text-xs font-bold text-white"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2 flex items-center justify-center text-xs font-bold text-white"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white"></span>
                  <span className="ml-4 text-xs text-gray-500 truncate  ">{project.title}</span>
                </div>
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover object-left bg-white"
                  style={{ height: "400px", minHeight: "400px", maxHeight: "400px", display: "block" }}
                />
              </div>
              {/* Back */}
              <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-center items-center p-6">
                <h2 className="text-2xl font-bold text-black mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-2 text-center">
                  {project.description}
                </p>
                {project.techStack && (
                  <div className="text-gray-400 text-xs mb-2 italic text-center">
                    {project.techStack}
                  </div>
                )}
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-black text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-800">
                      Live Demo →
                    </button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full"
                  >
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2496133.png?f=webp&w=512"
                      alt="github"
                      className="h-8 transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Flip card CSS */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .flip-card {
          width: 100%;
          position: relative;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default ProjectDisplay;