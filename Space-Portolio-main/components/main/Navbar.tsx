import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href=""
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* Add your logo or brand name here */}
        </a>
        <div className="flex flex-row items-center space-x-4">
          <a
            href="https://www.instagram.com/_chaudharyutkarsh_"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg text-[15px] ml-[6px] text-center"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/utkarsh-chaudhary-a8952324b"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg text-[15px] ml-[6px] text-center"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/Utkarshjaat06"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg text-[15px] ml-[6px] text-center"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
