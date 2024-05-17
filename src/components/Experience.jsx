import React from "react";

import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import Java from "../assets/java.png";
import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
  const experiences = [
    {
      src: Python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      src: Java,
      title: "Java",
      style: "shadow-orange-300",
    },
    {
      src: ReactIcon,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      src: Node,
      title: "Node.js",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-[#8892b0]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-pink-600">
            Experience
          </p>
          <p className="py-6">
            Here are some of the languages and technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`
                shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
