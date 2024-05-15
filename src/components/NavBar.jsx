import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const links = [
    { link: "home" },
    { link: "about" },
    { link: "projects" },
    { link: "experience" },
    { link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <ul
        className={`md:flex ${
          nav
            ? "flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800"
            : "hidden"
        }`}
      >
        {links.map(({ link }) => (
          <li
            key={link}
            className="px-4 py-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} onClick={toggleNav}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
