import React from "react";

import CSS from "../assets/css.png";
import Firebase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import Java from "../assets/java.jpg";
import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import Python from "../assets/python.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 2,
      src: ReactIcon,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      id: 4,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: Firebase,
      title: "Firebase",
      style: "shadow-orange-300",
    },
    {
      id: 9,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: Java,
      title: "Java",
      style: "shadow-red-500",
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
