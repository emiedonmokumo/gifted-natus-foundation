"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import team from "../public/json/team.json";

const TeamCarousel = () => {
  const [memberIndex, setMemberIndex] = useState<number>(0);

  const goToNext = () => {
    setMemberIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const goToPrev = () => {
    setMemberIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  };

  const currentMember = team[memberIndex];

  return (
    <div className="lg:mt-32 lg:mb-20 lg:py-16 md:mb-28 sm:my-28 bg-gray-900 text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet the <span className="text-green-500">Team</span>
      </h2>

      {/* Main Carousel Content */}
      <div className="flex sm:flex-col items-center justify-center lg:space-x-8 relative">
        <button
          onClick={goToPrev}
          className="bg-gray-800 p-3 rounded-full focus:outline-none sm:hidden"
        >
          <img src="/Previous Button.png" alt="Previous" className="w-16 md:w-12"/>
        </button>

        {/* Animated Current Member */}
        <motion.div
          className="flex sm:flex-col items-center lg:space-x-8 md:space-x-8 md:mx-5"
          key={currentMember.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:flex-shrink-0">
            <img
              className="lg:w-56 md:w-96 md:h-60 h-56 sm:h-80 sm:w-full rounded-lg object-cover"
              src={currentMember.image}
              alt={currentMember.name}
            />
          </div>
          <div className="md:w-96">
            <h3 className="text-xl font-bold sm:my-3">{currentMember.name}</h3>
            <p className="text-sm font-semibold text-green-500">
              {currentMember.role}
            </p>
            <p className="mt-4 lg:text-gray-300 md:text-justify">{currentMember.quote}</p>
          </div>
        </motion.div>

        <button
          onClick={goToNext}
          className="bg-gray-800 p-3 rounded-full focus:outline-none sm:hidden"
        >
          <img src="/Next button.png" alt="Next" className="lg:w-16 md:w-12" />
        </button>
      </div>

      {/* Thumbnail Navigation with Horizontal Scroll */}
      <div className="flex overflow-x-auto justify-center mt-8 space-x-4 scrollbar-hide w-full">
        <div className="flex space-x-4"> {/* This div allows overflow */}
          {team.map((member, index) => (
            <button
              key={member.id}
              className={`w-12 h-12 rounded-full overflow-hidden ${memberIndex === index ? "border-4 border-white" : ""}`}
              onClick={() => {
                setMemberIndex(index); // Update the current member index
                // Optionally, you could call a function here if you want to implement any additional functionality
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full rounded-md" // Adjusted to be rounded
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;