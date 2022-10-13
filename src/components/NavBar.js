import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "Portfolio",
  },
  {
    id: 4,
    link: "Skills",
  },
  {
    id: 5,
    link: "Contact",
  },
];

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-14 px-4 fixed text-white bg-black">
      <div>
        <h1 className="text-3xl font-signature ml-2">Satya</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              className="px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:text-gray-300 hover:scale-105 duration-200"
              key={id}
            >
              {link}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setIsMenu(!isMenu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isMenu && (
        <ul className="flex flex-col justify-center items-center relative top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 hover:text-gray-300 hover:scale-105 duration-200 ">
          {links.map(({ id, link }) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize py-6 text-3xl font-bold hover:scale-105 duration-200"
                key={id}
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
