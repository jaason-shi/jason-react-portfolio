import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-2xl sm:text-4xl font-bold text-[#ccd6f6]">
            Hello, my name is Jason!
          </h3>
          <p className="text-[#ccd6f6] py-4 max-w-[700px]">
            As a computer systems technology student at BCIT, I am inspired by
            the ever-evolving world of technology and its ability to solve
            complex problems. I am dedicated to applying my skills and knowledge
            to create innovative websites and applications that can enhance and
            improve daily life.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white border-2 w-fit px-5 py-3 my-2 flex cursor-pointer items-center rounded-md hover:bg-pink-600"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:flex flex-col justify-center md:w-2/3 content-center">
          <img
            className="rounded-2xl md:flex mx-auto w-2/3 md:w-full max-w-[250px] "
            src={Profile}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
