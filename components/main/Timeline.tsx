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
    year: "2010",
    title: "First encounter",
    duration: "2010-2012",
    description: "It all started in grade 10 at St.James HSS, when a friend of mine introduced me to the world of tech with his brand new smartphone. It always amazed me to find how these things work."
  },
  {
    year: "2010-2012",
    title: "The High School",
    description: "At this point, i started to make use of the internet in all possible ways, surfing became a passtime and getting to know something was cool. It was the time when you didn't have these much of mobile variants, so i got to know every available phone specs like back of my hand and it felt good."
  },
  {
    year: "2012-2015",
    title: "College Days",
    description: "Pursued Bachelor's in Computer Science, diving deep into programming fundamentals and software development."
  },
  // Add more items as needed
];

const Timeline = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-transparent p-8"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Title with floating animation */}
        <motion.h1 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-16"
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
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100%', opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)' }}
        />

        {timelineData.map((item, index) => (
          <motion.div 
            key={index} 
            className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
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
            {/* Content Container with hover effect */}
            <motion.div 
              className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-2"
                whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
              >
                {item.title}
              </motion.h3>
              {item.duration && (
                <motion.div 
                  className="text-gray-200 text-sm mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.duration}
                </motion.div>
              )}
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.description}
              </motion.p>
            </motion.div>

            {/* Animated circle with pulse effect */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full z-10"
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

            {/* Year label with hover effect */}
            <motion.div 
              className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold"
                whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
              >
                {item.year}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline; 