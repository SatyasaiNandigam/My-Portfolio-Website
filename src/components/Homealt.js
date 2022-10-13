import React from "react";
import Myimage from "../assets/myImg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'


const Homealt = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm Nandigam Satyasai
          </h2>
          <p className=" py-4 max-w-md font-medium text-gray-500">
            Computer Science student with a passion for web development and
            Data Science. Currently, I love to work on web application using
            technologies like React, Tailwind, Next JS and MongoDB or MySQL.
          </p>

          <div>
            <Link to={"Portfolio"} smooth={true} duration={500} spy={true} exact="true" offset={-80} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-4 md:mb-0">
          <img
            src={Myimage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Homealt;
