import React from "react";
import sentimentImage from "../assets/sentiment-icon-20.jpg";
import dashboardImage from "../assets/dashboardImage.png";
import coffeeshopImage from "../assets/coffeshopImage.jpg";
import PasswordManagerImage from "../assets/PasswordManagerImage.jpg";
import ChatImage from "../assets/ChatImage.jpg";

const portfolios = [
  {
    id: 1,
    src: sentimentImage,
    Title: "Sentiment Analysis",
    Demo: "https://github.com/SatyasaiNandigam/Machine-Learning-Projects/tree/main/Restaurant%20Reviews%20Classification",
    Code: "https://github.com/SatyasaiNandigam/Machine-Learning-Projects/blob/main/Restaurant%20Reviews%20Classification/Classifier_model.ipynb"
  },
  {
    id: 5,
    src: ChatImage,
    Title: "Chat App",
    
  },
  {
    id: 2,
    src: dashboardImage,
    Title: "React Dashboard",
    Demo: "https://satyasainandigam.github.io/React_Dashboard/",
    Code: "https://github.com/SatyasaiNandigam/React_Dashboard",
  },
  {
    id: 3,
    src: coffeeshopImage,
    Title: "Static Website",
    Demo: "https://satyasainandigam.github.io/Coffee-Website/",
    Code: "https://github.com/SatyasaiNandigam/Coffee-Website"
  },

  {
    id: 4,
    src: PasswordManagerImage,
    Title: "Portfolio Website",
    Demo: "https://satyasainandigam.github.io/My-Portfolio-Website",
    Code: "https://github.com/SatyasaiNandigam/My-Portfolio-Website"

  },
  
];
const PortfolioAlt = () => {
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 px-4 text-white w-full  md:h-fit max-h-fit">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pb-10">
        {/* heading for this section  */}
        <span className="text-4xl md:text-7xl font-bold inline border-b-4 border-gray-500 w-fit">Portfolio</span>
        <p className="my-4 text-sm md:text-xl"> Check out some of my work right here</p>


        {/* portfolio items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {portfolios.map(({ id, src, Title, Demo, Code }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg w-fit p-2 flex flex-col items-center">
                <p className="text-center font-semibold p-2">{Title}</p>
                <a href={Demo} rel="noreferrer" target="_blank"><img src={src} alt="" className="rounded-md cursor-pointer duration-200 hover:scale-105 object-fill "/></a>
                <div className="flex justify-around items-center w-full mt-auto py-2">
                  <a href={Demo} rel="noreferrer" target="_blank" className="w-fit cursor-pointer text-sm md:text-base duration-200 hover:scale-105">Demo</a>
                  <a href={Code} rel="noreferrer" target="_blank" className="w-fit cursor-pointer text-sm md:text-base duration-200 hover:scale-105">Code</a>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default PortfolioAlt;
