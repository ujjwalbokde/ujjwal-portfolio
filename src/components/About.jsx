import React from "react";

const About = () => {
  return (
    <div
      className="text-gray-300 bg-hero-simple md:bg-hero-about bg-cover bg-no-repeat min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10"
      id="about"
    >
      {/* Container with Equal Space for Both Sections */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto">
        
        {/* Left Side - Profile Image (Equal Width) */}
        <div className="flex justify-center w-full md:w-1/2 mb-5">
          <img
            src="/profile.jpg"
            alt="Profile"
            className=" md:h-[500px] rounded-full"
          />
        </div>

        {/* Right Side - About Content (Equal Width) */}
        <div className="w-full md:w-1/2 text-center md:text-left px-6">
          {/* Centered "About Me" Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-5">About Me</h1>
          <div className="w-40 md:w-80 h-2 bg-yellow-500 mb-10 mx-auto md:mx-0"></div>

          {/* About Me Description */}
          <p className="mb-10 leading-relaxed">
            I am a third-year B.Tech student specializing in Computer Science and Engineering. Passionate about web development, I have honed my skills as a MERN stack developer. My expertise lies in building responsive and efficient web applications using MongoDB, Express.js, React.js, and Node.js.
            <br /><br />
            I am eager to leverage my technical skills and academic knowledge to contribute to innovative projects and grow as a professional in the tech industry. Looking forward to connecting with like-minded professionals and exploring exciting opportunities in web development.
          </p>

          {/* Hobbies Section */}
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Hobbies & Interests</h2>
          <div className="flex flex-wrap justify-center md:justify-start">
            {["PLAYING CRICKET", "WATCHING CRICKET", "TRAVELLING"].map((hobby, index) => (
              <button
                key={index}
                className="border p-3 rounded-full hover:bg-yellow-500 hover:text-black hover:border-black mb-3 mx-2"
              >
                {hobby}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
