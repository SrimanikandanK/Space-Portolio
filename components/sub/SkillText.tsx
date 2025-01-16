"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center' id="skills">
        <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
                Transforming Ideas into Elegant Solutions
            </h1>
        </motion.div>
        
        <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Technical Expertise
        </motion.div>
        
        <motion.div
            variants={slideInFromRight(0.5)}
             className='font-mono text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#7042f8] via-[#c3b5fd] to-[#b49bff] mb-10 mt-[10px] text-center tracking-wider hover:scale-105 transition-all duration-300 max-w-[600px]'
        >
            Building robust, scalable architectures with cutting-edge technologies and best practices
        </motion.div>
    </div>
  )
}

export default SkillText