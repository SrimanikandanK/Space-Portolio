"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="whitespace-normal">
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Srimanikandan K{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg md:text-xl text-gray-300 my-5 max-w-[600px] leading-relaxed font-light"
        >
          I&apos;m a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">Frontend Developer</span> with 3.10+ months of experience, specializing in creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold">engaging web experiences</span>. 
          I&apos;ve worked with <span className="text-yellow-400 font-medium">prestigious clients</span> on confidential projects, delivering <span className="text-emerald-400 font-medium">high-quality solutions</span>.
        </motion.p>
        <div className="flex items-center gap-6">
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://drive.google.com/file/d/12OuBEAg8DkIU3qSIiukf17XARydzuGdx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] 
            hover:scale-105 transition-all duration-300 font-semibold tracking-wide 
            bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600
            animate-shimmer bg-[length:200%_100%]
            shadow-[0_0_20px_2px_rgba(124,58,237,0.5)]
            hover:shadow-[0_0_40px_2px_rgba(124,58,237,0.7)]"
          >
            <span className="flex items-center justify-center gap-2">
              Resume
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </motion.svg>
            </span>
          </motion.a>

          <motion.div 
            variants={slideInFromLeft(1.2)} 
            className="flex flex-row gap-2 md:gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/30 transition-colors duration-200
              border border-[#0077B5]/50 hover:border-[#0077B5] group"
            >
              <Link 
                href="https://www.linkedin.com/in/srimanikandan-k-7a00b2146/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="cursor-pointer md:w-6 md:h-6 group-hover:brightness-125 transition-all duration-200"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-[#333]/10 hover:bg-[#333]/30 transition-colors duration-200
              border border-[#333]/50 hover:border-[#333] dark:bg-white/10 dark:hover:bg-white/30 
              dark:border-white/50 dark:hover:border-white group"
            >
              <Link 
                href="https://github.com/SrimanikandanK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={30}
                  height={30}
                  className="cursor-pointer md:w-6 md:h-6 group-hover:brightness-125 transition-all duration-200"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
