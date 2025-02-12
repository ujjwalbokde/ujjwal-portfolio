"use client";

import Carousel from "@/components/ui/carousel";
export function Projects() {
  const slideData = [
    {
      title: "Ujjwal Graphics - A Business Website",
      button: "Explore",
      src: "/ug_web.jpg",
    },
    {
      title: "Library Management System",
      button: "Explore",
      src: "/library.png",
    },
    {
      title: "Wandarlust",
      button: "Explore",
      src: "/wandarlust.png",
    },
    {
      title: "Weather Detector",
      button: "Explore",
      src: "/weather.jpg",
    },
  ];
  return (
    (<div className="relative overflow-hidden w-full h-full py-20" id="projects">
        <h1 className="text-gray-300 text-3xl md:text-5xl font-bold mb-5 text-center">Projects</h1>
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="w-40 md:w-80 h-1 md:h-2 bg-yellow-500"></div>
        </div>
      <Carousel slides={slideData} />
    </div>)
  );
}
