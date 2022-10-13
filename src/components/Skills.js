import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import nextIcon from "../assets/nextjs.png";
import tailwindIcon from "../assets/tailwind.png";
import gitIcon from "../assets/git.png";
import machinelearningIcon from "../assets/machinelearning.png";
import pythonIcon from "../assets/python.png";
import sqlIcon from "../assets/sql.png";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: pythonIcon,
      title: "Python",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: sqlIcon,
      title: "SQL",
      style: "shadow-blue-700",
    },
    {
      id: 4,
      src: machinelearningIcon,
      title: "Machine Learning",
      style: "shadow-red-500",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 7,
      src: reactIcon,
      title: " React",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: nextIcon,
      title: "Next.js",
      style: "shadow-gray-300",
    },
    {
      id: 9,
      src: tailwindIcon,
      title: "Tailwind",
      style: "shadow-blue-600",
    },

    {
      id: 10,
      src: nodeIcon,
      title: "Node.js",
      style: "shadow-green-600",
    },

    {
      id: 11,
      src: gitIcon,
      title: "Git",
      style: "shadow-orange-700",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-full`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
