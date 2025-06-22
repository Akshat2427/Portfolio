import React, { useState, useEffect } from "react";

function ProjectDisplay({
  images,
  titles,
  descriptions,
  techStacks,
  demo,
  github,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {projects.map((project, index) =>
          isMobile ? (
            // Mobile: Always show the "back" side
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col justify-center items-center p-6 w-full"
              style={{ minHeight: 420 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover object-left bg-white mb-4 rounded"
                style={{
                  height: "180px",
                  minHeight: "180px",
                  maxHeight: "180px",
                  display: "block",
                }}
              />
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
          ) : (
            // Desktop: Mac window/blur/hover effect
            <div key={index} className="relative group perspective">
              <div
                className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-[#f5f5f7] relative"
                style={{
                  minHeight: 420,
                  height: "auto",
                  background: `url(${project.image}) center/cover no-repeat`,
                }}
              >
                {/* Mac window bar */}
                <div className="flex items-center px-4 py-2 bg-[#e0e0e0] border-b border-gray-300 relative z-10">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2 flex items-center justify-center text-xs font-bold text-white"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2 flex items-center justify-center text-xs font-bold text-white"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white"></span>
                  <span className="ml-4 text-xs text-gray-500 truncate">
                    {project.title}
                  </span>
                </div>
                {/* Blur overlay and content */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center p-6 transition-all duration-500"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                ></div>
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center p-6 transition-all duration-500 group-hover:opacity-100 group-hover:pointer-events-auto"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                >
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
          )
        )}
      </div>
      {/* Blur overlay CSS for smooth effect */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .group:hover .absolute.inset-0 {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
}

export default ProjectDisplay;