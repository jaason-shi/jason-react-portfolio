import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#8892b0] border-pink-600">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an aspiring software developer with a strong drive to succeed in
          the tech industry. I am honing my skills in various programming
          languages such as Python, JavaScript, HTML, and CSS. Currently, I am
          learning Java and C at BCIT. In my free time, I am also learning React
          and React Native. I am passionate about staying up-to-date with the
          latest technologies and am always looking for new challenges to
          tackle.
        </p>

        <br />

        <p className="text-xl">
          While not at my desk, I am the captain of my volleyball team and enjoy
          the camaraderie and competition that comes with the sport. I also love
          hitting the slopes and skiing down the mountain during the winter
          time.
        </p>
      </div>
    </div>
  );
};

export default About;
