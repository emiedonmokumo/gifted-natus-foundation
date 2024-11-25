import { FaCalendar, FaEye } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";
import Post from "./Post";

interface occasion {
  img: string;
  title: string;
  _id: string;
  writeup1: string;
  writeup2:(string|null);
  writeup3: (string|null)
}

const AboutSlider = () => {
  const programs: occasion[] = [
    {
      img: "education.jpeg",
      title: "Education & Empowerment",
      _id: "education",
      writeup1:
        "•	Awarding full scholarships to underprivileged children from nursery to university \n  \n ",
      writeup2:"•	Organizing academic competitions like the Bayelsa Mathematics Quiz to inspire excellence in STEM education.",
      writeup3: "•	Providing skill acquisition training through programs like G-Skill, creating a generation of self-reliant entrepreneurs."
    },
    {
      img: "community.jpeg",
      title: "Humanitarian Support & Emergency Relief",
      _id: "support",
      writeup1:
        "•	Delivering food, shelter, and essential supplies to families affected by natural disasters, such as the Bayelsa floods. \n \n \n \n ",
        writeup2: "•	Supporting women and children with resources to rebuild their lives.",
        writeup3:"•	Championing initiatives that provide hope and stability during challenging times."
    },
    {
      img: "support.jpeg",
      title: "Human Capacity Development",
      _id: "capacity",
      writeup1:
        "Commitment to equipping individuals with the skills and knowledge needed to thrive in a competitive world.",
      writeup2: null,
      writeup3: null
    },
  ];

  return (
    <div
      className=" mx-auto mt-8 relative w-full p-1 m-0 mb-[200px] flex lg:items-center flex-col"
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

                <p>{article.writeup1}</p>
                <p>{article.writeup2}</p>
                <p>{article.writeup3}</p>

                
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
