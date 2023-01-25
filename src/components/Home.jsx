import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, my name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Jason Shi
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I have 1 year of experience
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white border-2 w-fit px-5 py-3 my-2 flex cursor-pointer items-center rounded-md hover:bg-pink-600"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
