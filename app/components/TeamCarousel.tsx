'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="bg-gray-900 text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet the <span className="text-green-500">Team</span>
      </h2>
      <div className="flex items-center justify-center space-x-8">
        <button
          onClick={goToPrev}
          className="bg-gray-800 p-3 rounded-full focus:outline-none"
        >
          <span>&lt;</span>
        </button>

        <motion.div
          className="flex items-center space-x-8"
          key={currentMember.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Team member's image */}
          <div className="flex-shrink-0">
            <img
              className="w-56 h-56 rounded-lg object-cover"
              src={currentMember.image}
              alt={currentMember.name}
            />
          </div>
          {/* Team member's info */}
          <div>
            <h3 className="text-xl font-bold">{currentMember.name}</h3>
            <p className="text-sm font-semibold text-green-500">
              {currentMember.role}
            </p>
            <p className="mt-4 text-gray-300">{currentMember.quote}</p>
          </div>
        </motion.div>

        <button
          onClick={goToNext}
          className="bg-gray-800 p-3 rounded-full focus:outline-none"
        >
          <span>&gt;</span>
        </button>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex justify-center mt-8 space-x-4">
        {TeamMembers.map((member, index) => (
          <button
            key={member.id}
            className={`w-12 h-12 rounded-full overflow-hidden ${
              currentIndex === index ? "border-4 border-green-500" : ""
            }`}
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
