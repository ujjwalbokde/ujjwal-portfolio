import React from 'react';

const Skills = () => {
  return (
    <div className="text-gray-300 min-h-screen w-full pt-16 pb-16 element" name="skills">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center">Skills</h1>
        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="w-40 sm:w-80 h-2 bg-yellow-500"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            { src: "html.png", alt: "html", name: "HTML" },
            { src: "css.png", alt: "css", name: "CSS" },
            { src: "javascript.png", alt: "javascript", name: "JAVASCRIPT" },
            { src: "react.png", alt: "react", name: "REACT" },
            { src: "nextJs.png", alt: "next", name: "NEXT JS" },
            { src: "tailwind.png", alt: "tailwind", name: "TAILWIND" },
            { src: "node.png", alt: "node", name: "NODE JS" },
            { src: "express.png", alt: "express", name: "EXPRESS JS" },
            { src: "DB.png", alt: "mongodb", name: "MONGODB" },
            { src: "bootstrap.png", alt: "bootstrap", name: "BOOTSTRAP" },
            { src: "java.png", alt: "java", name: "JAVA" },
            { src: "C.png", alt: "c", name: "C LANGUAGE" },
            { src: "python.png", alt: "python", name: "PYTHON" },
          ].map((skill, index) => (
            <div
              key={index}
              className="text-center rounded-2xl border border-gray-700 p-4 sm:p-6 flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={skill.src}
                className="w-16 sm:w-24 mb-2 hover:w-[68px] sm:hover:w-[104px] hover:duration-200"
                alt={skill.alt}
              />
              <span className="text-sm sm:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;