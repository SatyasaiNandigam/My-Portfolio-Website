import React from "react";
import sentimentImage from "../assets/sentiment-icon-20.jpg";
import dashboardImage from "../assets/dashboardImage.png";
import coffeeshopImage from "../assets/coffeshopImage.jpg";
import PasswordManagerImage from "../assets/PasswordManagerImage.jpg";
import ChatImage from "../assets/ChatImage.jpg";
 

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sentimentImage,
    },
    {
      id: 2,
      src: dashboardImage,
    },
    {
      id: 3,
      src: coffeeshopImage,
    },
  
    {
      id: 4,
      src: PasswordManagerImage,
    },
    {
      id: 5,
      src: ChatImage,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-52 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;