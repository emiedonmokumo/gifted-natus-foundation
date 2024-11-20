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

const Programs = () => {
  const programs: occasion[] = [
    {
      img: "education.jpeg",
      title: "Education & Empowerment",
      _id: "education",
      writeup:
        "Providing scholarships, mentorship, and skill acquisition opportunities for future leaders.",
    },
    {
      img: "community.jpeg",
      title: "Humanitarian Support & Emergency Relief",
      _id: "support",
      writeup:
        "Delivering hope to families in need through emergency interventions and support programs.",
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
      className=" mx-auto overflow-x-scroll relative w-full p-1 m-0 flex lg:items-center flex-col"
      id="programs"
      style={{ marginTop: 0 }}
    >
      {/* Slider Container */}
      <div className="overflow-x-scroll w-full">
        <div
          className="flex space-x-4 no-scrollbar"
          style={{ width: `300px * 3` }}
        >
          {/* Card 1 */}
          {programs &&
            programs.map((article: occasion, index: number) => (
              <Link
                href={`/programs-and-initiatives#${article._id}`}
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

                <p className="text-green-500 text-center">Read more</p>
              </Link>
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

export default Programs;
