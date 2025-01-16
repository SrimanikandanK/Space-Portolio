'use client'
import { motion } from 'framer-motion';
import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  duration?: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2017",
    title: "Saveetha Engineering College",
    duration: "2017-2021",
    description: "Pursued Bachelor's in Computer Science Engineering, establishing a strong foundation in programming fundamentals, data structures, and software development principles."
  },
  {
    year: "2021",
    title: "Software Development Intern",
    duration: "April - November 2021",
    description: "Worked as an intern at Orion India Systems, gaining hands-on experience in web development technologies and contributing to real-world projects."
  },
  {
    year: "2022",
    title: "Associate Trainee",
    duration: "Nov 2021 - December 2022",
    description: "Started professional career as an Associate Trainee, focusing on developing and maintaining web applications while learning industry best practices."
  },
  {
    year: "2023",
    title: "Associate Software Engineer",
    duration: "2022 - Present",
    description: "Led development of confidential enterprise applications for top-tier clients. Architected and implemented solutions from scratch, achieving 40% performance improvement through optimization. Spearheaded the development of scalable features and mentored junior developers in best practices."
  },
  // Add more items as needed
];

const Timeline = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-transparent p-4 md:p-8"
    >
      <div className="relative max-w-4xl mx-auto" id="journey">
        {/* Title with floating animation */}
        <motion.h1 
          className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          The Journey
        </motion.h1>

        {/* Animated vertical line with gradient glow */}
        <motion.div 
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100%', opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)' }}
        />

        {timelineData.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.2
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className={`mb-2 pl-12 md:pl-0 md:relative md:w-1/2 ${
                index % 2 === 0 ? 'md:text-left order-1 md:order-1' : 'md:text-right order-1 md:order-2'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold"
                whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
              >
                {item.year}
              </motion.div>
            </motion.div>

            <motion.div 
              className={`w-full md:w-1/2 pl-12 md:pl-8 md:px-8 ${
                index % 2 === 0 ? 'md:text-right order-2 md:order-2' : 'md:text-left order-2 md:order-1'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mb-2"
                whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
              >
                {item.title}
              </motion.h3>
              {item.duration && (
                <motion.div 
                  className="text-gray-200 text-xs md:text-sm mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.duration}
                </motion.div>
              )}
              <motion.p 
                className="text-gray-200 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.description}
              </motion.p>
            </motion.div>

            <motion.div 
              className="absolute left-4 top-0 md:left-1/2 transform md:-translate-x-1/2 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 
              }}
              whileHover={{ scale: 1.5 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline; 