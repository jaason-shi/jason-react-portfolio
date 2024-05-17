import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-pink-600">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20 text-[#ccd6f6]">
          I am a dedicated and aspiring software developer with a strong passion
          for the tech industry. Continuously honing my skills, I am proficient
          in programming languages such as Python, Java, JavaScript, HTML, CSS,
          SQL, C, and Kotlin. I have worked with various frameworks and
          libraries, including React, Node.js, Express.js, and Bootstrap, and
          have hands-on experience developing full-stack applications. I am
          well-versed in the software development lifecycle and proficient in
          Git, with practical experience working with databases such as MySQL
          and MongoDB. Additionally, I have also worked with functional
          programming and gained experience with languages like Elixir, Rust,
          and OCaml.
        </p>

        <br />

        <p className="text-xl text-[#ccd6f6]">
          Staying current with the latest technological advancements is a
          priority for me, and I am always eager to take on new challenges and
          opportunities for growth. My strong leadership skills, project
          management experience, analytical problem-solving abilities, and
          excellent interpersonal communication enable me to excel in
          collaborative environments. My goal is to leverage my skills and
          knowledge to create innovative solutions that make a positive impact.
        </p>

        <br />

        <p className="text-xl text-[#ccd6f6]">
          When I'm not at my desk, I embrace an active lifestyle and a variety
          of hobbies. As the captain of my volleyball team, I thrive on the
          camaraderie and competition that comes with the sport. During the
          winter, I love hitting the slopes and skiing down the mountains.
          Additionally, I enjoy playing soccer, which keeps me fit and engaged
          with teamwork. Outside of sports, I have a passion for watching movies
          and exploring different genres. I also find peace and adventure in
          hiking, appreciating the beauty of nature. Another one of my interests
          is building computers, where I combine my love for technology with
          hands-on creativity.
        </p>
      </div>
    </div>
  );
};

export default About;
