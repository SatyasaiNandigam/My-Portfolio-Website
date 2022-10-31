import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin
          size={35}
          className="group-hover:text-blue-400"
          title="LinkedIn"
          aria-label="LinkedIn"
        />
      </>
    ),
    href: "https://www.linkedin.com/in/satyasainandigam/",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub
          size={35}
          className="group-hover:text-blue-400"
          title="GitHub"
          aria-label="GitHub"
        />
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

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-gray-800 to-black  text-white w-full  md:h-fit max-h-fit p-4">
      <ul className="flex justify-center items-center gap-9 lg:hidden ">
        {links.map(({ id, child, href, download }) => {
          return (
            <li key={id}>
              <a className="hover:text-blue-400" href={href} download={download}>
                {child}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="text-sm">created by @ N.SatyaSai. Computer Science Student</p>
    </div>
  );
};

export default Footer;
