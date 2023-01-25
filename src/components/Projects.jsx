import React from "react";
import HappinessReport from "../assets/portfolio/happinessreport.png";
import MediTrack from "../assets/portfolio/meditrack.jpg";
import TextGame from "../assets/portfolio/textgame.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "MediTrack",
      src: MediTrack,
      github: "https://github.com/jaason-shi/MediTrack",
    },
    {
      id: 2,
      name: "Global Happiness Viewer",
      src: HappinessReport,
      github: "https://github.com/jaason-shi/global-happiness-viewer",
    },
    {
      id: 3,
      name: "Text Adventure Game",
      src: TextGame,
      github: "https://github.com/jaason-shi/text-based-adventure-game",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center">
          {portfolios.map(({ id, src, github, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-200"
              />
              <span className="text-2xl font bold text-[#8892b0] tracking-wider items-center justify-center ">
                {name}
              </span>
              <div className="pt-8 text-center ">
                <a href={github} target="_blank" rel="noreferrer">
                  <button
                    className="text-center rounded-md hover:bg-pink-600 w-fit my-2 px-4 py-2 m-2
                           text-white border-2"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
