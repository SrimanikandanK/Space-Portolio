import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 sm:px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin sm:w-[50px] sm:h-[50px]"
          />

          <span className="font-bold ml-[10px] hidden sm:block text-gray-300">
            Srimanikandan K
          </span>
        </a>

        <div className="flex flex-1 justify-center max-w-[500px]">
          <div className="flex items-center justify-between w-full max-w-[300px] h-auto border border-[#7042f861] bg-[#0300145e] px-3 sm:px-[20px] py-[10px] rounded-full text-gray-200 text-sm sm:text-base">
            <a href="#about-me" className="cursor-pointer">About</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-2 md:gap-5">
          <Link 
            href="https://www.linkedin.com/in/srimanikandan-k-7a00b2146/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="cursor-pointer sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </Link>
          <Link 
            href="https://github.com/SrimanikandanK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="cursor-pointer sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
