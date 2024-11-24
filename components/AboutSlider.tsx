import { FaCalendar, FaEye } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";
import Post from "./Post";

interface occasion {
  img: string;
  title: string;
  _id: string;
  writeup: string;
}

const AboutSlider = () => {
  const programs: occasion[] = [
    {
      img: "education.jpeg",
      title: "Education & Empowerment",
      _id: "education",
      writeup:
        "•	Awarding full scholarships to underprivileged children from nursery to university \n •	Organizing academic competitions like the Bayelsa Mathematics Quiz to inspire excellence in STEM education. \n •	Providing skill acquisition training through programs like G-Skill, creating a generation of self-reliant entrepreneurs.",
    },
    {
      img: "community.jpeg",
      title: "Humanitarian Support & Emergency Relief",
      _id: "support",
      writeup:
        "•	Delivering food, shelter, and essential supplies to families affected by natural disasters, such as the Bayelsa floods. \n \n•	Supporting women and children with resources to rebuild their lives. \n \n •	Championing initiatives that provide hope and stability during challenging times.",
    },
    {
      img: "support.jpeg",
      title: "Human Capacity Development",
      _id: "capacity",
      writeup:
        "Commitment to equipping individuals with the skills and knowledge needed to thrive in a competitive world.",
    },
  ];

  return (
    <div
      className=" mx-auto mt-8 relative w-full p-1 m-0 flex lg:items-center flex-col"
      id="programs"
      style={{ marginTop: 0 }}
    >
      {/* Slider Container */}
      <div className="overflow-x-scroll sm:w-full md:w-full lg:w-[60%] mx-auto">
        <div
          className="flex space-x-4 no-scrollbar"
          style={{ width: `300px * 3` }}
        >
          {/* Card 1 */}
          {programs &&
            programs.map((article: occasion, index: number) => (
              <div
                className="max-w-[300px] bg-gray-900 text-white p-5 rounded-lg flex-shrink-0"
                key={article.title + index}
              >
                <img
                  className="rounded-lg w-full h-40 object-cover"
                  src={article.img}
                  alt={article.title}
                />
                <div className="mt-4 text-lg font-bold">{article.title}</div>

                <p>{article.writeup}</p>

                
              </div>
            ))}
        </div>
      </div>

      {/* See All */}
      <div className="mt-8 text-center">
        <Link
          href="/programs-and-initiatives"
          className="text-lg text-green-500 font-semibold hover:underline"
        >
          see all
        </Link>
      </div>
    </div>
  );
};

export default AboutSlider;
