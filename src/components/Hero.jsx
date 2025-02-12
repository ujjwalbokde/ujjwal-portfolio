"use client";
import React from "react";
import { Globe } from "./Globe";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-6 md:px-12 bg-no-repeat text-gray-300"
      id="home"
    >
      {/* Left Section - Hero Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-16">
        <h5 className="italic text-yellow-500 mb-2 text-center md:text-left">
          Hello !!!
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left">
          I'm Ujjwal 
        </h1>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-6 space-y-1 md:space-y-0">
          <div className="bg-yellow-400 text-black italic px-3 py-1 mx-1 rounded-md">
            FULL STACK WEB DEVELOPER
          </div>
          <div className="bg-yellow-400 text-black italic px-3 py-1 mx-1 rounded-md">
            JAVA
          </div>
          <div className="bg-yellow-400 text-black italic px-3 py-1 mx-1 rounded-md">
            DATA STRUCTURE
          </div>
        </div>

        {/* Social Buttons (Rounded + Adjusted Spacing on Small Screens) */}
        <div className="mb-4 md:mb-6 flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-3 space-y-2 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/ujjwal-bokde-3577a625a/"
            target="_blank"
            className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full text-sm px-5 py-2.5 hover:bg-gradient-to-bl"
          >
            <img src="linkedin.png" className="w-5 h-5 mr-2" alt="LinkedIn" />
            Linkedin
          </a>
          <a
            href="https://github.com/ujjwalbokde"
            target="_blank"
            className="flex items-center bg-gradient-to-br from-pink-500 to-orange-400 text-white font-medium rounded-full text-sm px-5 py-2.5 hover:bg-gradient-to-bl"
          >
            <img src="github.png" className="w-5 h-5 mr-2" alt="GitHub" />
            GitHub
          </a>
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="flex items-center bg-gradient-to-br from-green-400 to-blue-600 text-white font-medium rounded-full text-sm px-5 py-2.5 hover:bg-gradient-to-bl"
          >
            <img src="downloading.png" className="w-5 h-5 mr-2" alt="Resume" />
            Resume
          </button>
        </div>

        <p className="text-center md:text-left text-lg leading-relaxed">
          I am a Computer Science student with a passion for coding,
          specializing in the MERN stack and Next.js. I enjoy solving problems
          and building web applications that blend creativity with technical
          expertise. As the Secretary of the Engineering India YCCE club, I
          have led initiatives and events that promote learning, innovation,
          and social welfare. I am always eager to collaborate on impactful
          projects and continuously expand my skill set.
        </p>
      </div>

      {/* Right Section - Globe (Hidden on Small Screens, Moves Up on Large Screens) */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center mt-[-50px] md:mt-[-100px]">
        <Globe />
      </div>
    </div>
  );
};

export default Hero;
