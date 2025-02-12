"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from URL
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock Data (Replace with API call)
  const projects = [
    {
      id: "0",
      title: "Ujjwal Graphics - A Business Website",
      description:
        "Created a business website to showcase graphic design services, featuring secure login, product categorization, and a modern user interface for customers to explore services.",
      image: "/ug_web.jpg",
      technologies: {
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express.js",
        database: "MongoDB",
      },
      githubLink: "https://github.com/ujjwalbokde/Ujjwal-Graphics_Website",
      site:"https://ujjwal-graphics.vercel.app/"
    },
    {
      id: "1",
      title: "Library Management System",
      description:
        "A web application designed to streamline library operations. Features include user authentication, book management, and tracking of borrowing and returning activities.",
      image: "/library.png",
      technologies: {
        frontend: "React.js, Tailwind CSS",
        backend: "Node.js, Express.js",
        database: "MongoDB",
      },
      githubLink: "https://github.com/ujjwalbokde/Library-Management-Project-using-react",
    },
    {
      id: "2",
      title: "Wandarlust",
      description:
        "A dynamic web platform designed to help users discover and review hotels. Browse through a variety of hotel listings, from cozy cabins to luxurious retreats.",
      image: "/wandarlust.png",
      technologies: {
        frontend: "Ejs, CSS, Javascript, Tailwind CSS",
        backend: "Node.js, Express.js",
        database: "MongoDB",
      },
      githubLink: "https://github.com/ujjwalbokde/Mini-Wandarlust",
    },
    {
      id: "3",
      title: "Weather Detector",
      description:
        "A React.js-powered application that offers real-time weather updates with an engaging and user-friendly interface. The app provides accurate weather information, including current conditions, forecasts, and weather icons, to help users plan their activities Leveraging React.js for dynamic and responsive design, the app ensures a smooth and interactive experience across devices. ",
      image: "/weather.jpg",
      technologies: {
        frontend: "React.js, Tailwind CSS",
      },
      githubLink: "https://github.com/ujjwalbokde/Weather-API-using-reactjs",
      site:"https://ujjwal-weather-detector.vercel.app/"
    },
  ];

  useEffect(() => {
    if (id) {
      const foundProject = projects.find((proj) => proj.id === id);
      if (!foundProject) {
        router.push("/"); // Redirect to projects page if not found
      } else {
        setProject(foundProject);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center text-gray-300 py-20">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p className="mt-4">Redirecting to the homepage...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl my-16 mx-auto shadow-lg rounded-lg border-2 border-gray-700 flex flex-col md:flex-row p-6 gap-6 md:p-12 ">
      {/* Project Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-full h-auto max-h-[400px] object-center rounded-lg shadow-lg"
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* Project Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
        <h5 className="mb-5 text-3xl font-bold tracking-tight text-yellow-500">
          {project.title}
        </h5>
        <p className="mb-6 text-lg text-gray-400">{project.description}</p>

        {/* Technologies Used */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-300 mb-3">
            Technologies Used:
          </h3>
          <ul className="text-gray-400">
            <li>
              <b>Frontend:</b> {project.technologies.frontend}
            </li>
            {project.technologies.backend && <><li>
              <b>Backend:</b> {project.technologies.backend}
            </li>
            <li>
              <b>Database:</b> {project.technologies.database}
            </li></>}
            
          </ul>
        </div>

        {/* GitHub Link */}
        <div className="flex mt-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
          >
            View on GitHub
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
          {project.site && (<a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-5 inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
          >
            Visit
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>)}
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;