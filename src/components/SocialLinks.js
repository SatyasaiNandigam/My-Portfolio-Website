import React from "react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={35} className="group-hover:text-blue-400" />
        </>
      ),
      href: "https://www.linkedin.com/in/satyasainandigam/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={35} className="group-hover:text-blue-400" />
        </>
      ),
      href: "https://github.com/satyasai1709",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={35} className="group-hover:text-blue-400" />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill
            size={35}
            className="group-hover:text-blue-400"
          />
        </>
      ),
      href: "/Resume.pdf",
      downolad: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, downolad }) => {
         return (
          <li
            key={id}
            className=" group flex justify-between items-center w-40 h-14 px-4 mb-3 bg-transparent hover:ml-[15px] duration-500"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={downolad}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>);
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;