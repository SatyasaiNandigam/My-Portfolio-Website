import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={35} className="group-hover:text-blue-400" title="LinkedIn" aria-label="LinkedIn" />
        </>
      ),
      href: "https://www.linkedin.com/in/satyasainandigam/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={35} className="group-hover:text-blue-400" title="GitHub" aria-label="GitHub" />
        </>
      ),
      href: "https://github.com/satyasainandigam",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail
            size={35}
            className="group-hover:text-blue-400"
            title="Email"
            aria-label="Email"
          />
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
            title="Resume"
            aria-label="Resume"
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
              className=" group flex justify-between items-center w-fit h-14 px-4 mb-3 bg-transparent hover:ml-[15px] duration-500"
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
