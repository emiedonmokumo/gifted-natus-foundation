'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TeamMembers = [
  {
    id: 1,
    name: "Ogbomade Johnson Itutumeni",
    role: "Media Director",
    quote:
      "At Gifted Natus Foundation, every story we share is a testament to the power of community and collective action. My role is to amplify those voices, ensuring that the impact we make is seen and felt beyond the boundaries of where we work.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Amina Yusuf",
    role: "Content Strategist",
    quote:
      "We craft narratives that resonate with our audience, empowering them to be a part of something larger than themselves.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Dayo Adeyemi",
    role: "Operations Manager",
    quote:
      "We streamline processes to ensure that our team can work efficiently, delivering impact where it is needed most.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    name: "Ngozi Chukwu",
    role: "Outreach Coordinator",
    quote:
      "Every connection we build takes us a step closer to our goal. It's all about fostering relationships that matter.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 5,
    name: "Chidi Anozie",
    role: "Project Lead",
    quote:
      "We lead with passion and purpose, ensuring that each project speaks volumes about the work we do.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TeamMembers.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + TeamMembers.length) % TeamMembers.length
    );
  };

  const currentMember = TeamMembers[currentIndex];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Meet the <span className="text-green-500">Team</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <button
          onClick={goToPrev}
          className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition focus:outline-none shadow-lg"
        >
          <span className="text-2xl">&lt;</span>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-2xl p-6 md:p-10 lg:p-12"
            key={currentMember.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Team member's image */}
            <div className="flex-shrink-0">
              <img
                className="w-36 h-36 md:w-48 md:h-48 rounded-lg object-cover shadow-lg"
                src={currentMember.image}
                alt={currentMember.name}
              />
            </div>
            {/* Team member's info */}
            <div className="text-center md:text-left md:ml-6 mt-6 md:mt-0 px-4">
              <h3 className="text-2xl font-bold">{currentMember.name}</h3>
              <p className="text-lg font-semibold text-green-400 mt-2">
                {currentMember.role}
              </p>
              <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                {currentMember.quote}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToNext}
          className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition focus:outline-none shadow-lg"
        >
          <span className="text-2xl">&gt;</span>
        </button>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex justify-center mt-8 space-x-2 md:space-x-4">
        {TeamMembers.map((member, index) => (
          <button
            key={member.id}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 ${
              currentIndex === index
                ? "border-green-500 shadow-lg scale-110"
                : "border-gray-700"
            } transform transition duration-200 ease-in-out hover:scale-110`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
