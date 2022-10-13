import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import {Link} from 'react-scroll'

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

const NavBarAlt = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className=" px-4 flex justify-between items-center sticky top-0 z-50  w-full h-16 bg-black text-white">
      <div>
        <h1 className="text-3xl font-signature ml-2">Satya</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:text-gray-300 hover:scale-105 duration-200"
                key={id}
              >
                <Link to={link} smooth={true} duration={500} spy={true} exact="true" offset={-80}>{link}</Link>
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
          <ul className="flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 duration-200 ">
            {links.map(({ id, link }) => {
              return (
                <li
                  className="px-4 cursor-pointer capitalize py-6 text-3xl font-bold hover:text-gray-300 hover:scale-105 duration-200"
                  key={id}
                >
                  <Link onClick={()=> setIsMenu(!isMenu)} to={link} smooth={true} duration={500} spy={true} exact="true" offset={-80}>{link}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBarAlt;
