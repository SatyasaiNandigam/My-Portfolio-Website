import React from "react";

const AboutAlt = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <span className="text-4xl md:text-7xl font-bold iniline border-b-4 border-gray-500 w-fit">
          About
        </span>
        <p className="mt-10 text-sm md:text-xl">
          I am a Computer Science student with passion towards Web development and Data Science.Open Source enthusiast. Currently working as Software Developer Intern at Scketch- an Altumind Company and working on MERN stack development projects.
        </p>
        <br />
        <p className="text-sm md:text-xl">
          I like working collaboratively and learning new things. I am always open to new opportunities and challenges. Coding is my passion and I love to work on projects that can help people.Please contact me for any work or suggestions.
        </p>
      </div>
    </div>
  );
};

export default AboutAlt;
