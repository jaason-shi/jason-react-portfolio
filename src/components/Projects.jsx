import React from "react";
import DSD from "../assets/portfolio/dsd.jpg";
import HappinessReport from "../assets/portfolio/happinessreport.png";
import NutriFit from "../assets/portfolio/nutrifit.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Projects = [
    {
      name: "Diagnosing Skin Diseases",
      src: DSD,
      description:
        "Developed a full-stack web application with a client to diagnose skin diseases using a series of decision trees as diagnosis models",
      github:
        "https://github.com/Diagnosing-SkinDiseases/diagnosing-skin-diseases",
    },
    {
      name: "Global Happiness Viewer",
      src: HappinessReport,
      description:
        "A Python application that visualizes data correlations among happiness, GDP, wealth, minimum wage, and life expectancy in various countries",
      github: "https://github.com/jaason-shi/global-happiness-viewer",
    },
    {
      name: "NutriFit",
      src: NutriFit,
      description:
        "A full-stack mobile application that uses the chatGPT API to provide users with personalized meal and workout plans based on user preferences and goals.",
      github: "https://github.com/jaason-shi/NutriFit",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-[#8892b0] md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map((portfolio) => (
            <ProjectCard key={portfolio.id} {...portfolio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
