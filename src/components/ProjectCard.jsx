import React from "react";

const ProjectCard = ({ name, src, description, github }) => {
  return (
    <div className="flex flex-col shadow-md shadow-gray-600 rounded-lg h-full">
      <img
        src={src}
        alt={name}
        className="rounded-t-md duration-200 hover:scale-105"
        style={{ height: "400px", objectFit: "cover" }}
      />
      <div className="flex flex-col justify-between flex-grow p-4">
        <h3 className="text-2xl font-bold text-[#8892b0] mb-4">{name}</h3>
        <p className="text-[#a8b2d1] mb-4">{description}</p>
        <a href={github} target="_blank" rel="noreferrer">
          <button className="text-center rounded-md bg-pink-600 hover:bg-pink-700 text-white w-full py-2">
            View Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
