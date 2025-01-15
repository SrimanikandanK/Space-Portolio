import React from "react";

const skillsData = {
  "Programming Languages": ["HTML/CSS", "JavaScript", "TypeScript"],
  "Frameworks": ["React", "Material-UI", "Jest"],
  "State Management": ["Redux"],
  "CSS/Styling": ["Tailwind CSS", "Bootstrap"],
  "Developer Tools": ["Git", "GitLab", "VS Code", "Visual Studio"],
  "Build Tools": ["Webpack", "Babel", "Vite"],
  "Architecture": ["Micro Frontend Architecture", "Monolithic"]
};

const TechnicalSkills = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="skills">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div 
            key={category}
            className="bg-[#0300145e] border border-[#7042f861] p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-purple-500 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#2A0E61] px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-purple-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills; 