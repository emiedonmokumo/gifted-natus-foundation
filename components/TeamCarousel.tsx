"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <div className="lg:mt-32 lg:mb-8 lg:py-16 md:mb-28 sm:my-28 bg-gray-900 text-white py-10 px-4"
    style={{marginBottom:"10px"}}>
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet the <span className="text-green-500">Founder</span>
      </h2>

      {/* Main Carousel Content */}
      <div className="flex sm:flex-col items-center justify-center lg:space-x-8 relative">

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
              className="lg:w-56 md:w-96 md:h-60 h-56 sm:h-[400px] sm:w-full rounded-lg object-cover"
              src={currentMember.image}
              alt={currentMember.name}
            />
          </div>
          <div className="md:w-96 space-y-4">
            <h3 className="text-xl font-bold sm:my-3 sm:text-center md:text-center">{currentMember.name}</h3>
            <p className="text-sm font-semibold text-green-500 sm:text-center md:text-center">
              {currentMember.role}
            </p>
            <p className="mt-4 lg:text-gray-300 sm:text-justify md:text-justify text-left">{currentMember.quote}</p>
          </div>
        </motion.div>
        <Link href={"/aboutus#founder"} className="text-center text-[#07a034] lg:absolute bottom-2">see more &rarr;</Link>
      </div>
    </div>
  );
};

export default TeamCarousel;
