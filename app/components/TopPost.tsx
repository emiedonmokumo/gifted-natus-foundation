"use client"
import { useEffect } from 'react';
import { FaCalendar, FaEye } from "react-icons/fa6";
import Link from "next/link"

interface Post {
    img: string;
    title: string;
    day: string;
    veiws: string;
    id: number;
    shortText: string;
    category: string;
  }

export default function TopPost() {
    
  const posts: Post[] = [
    {
      img: "/post1.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Events",
      id: 1,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam",
    },
    {
      img: "/post2.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Health",
      id: 2,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam",
    },
    {
      img: "/post3.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Environment",
      id: 3,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam ",
    },
    {
      img: "/post4.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Youth",
      id: 4,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam",
    },
    {
      img: "/post1.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Welfare",
      id: 5,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam ",
    },
    // More posts...
  ];
    return (
        <div className="overflow-scroll h-[500px] w-screen flex items-center justify-center">
            {/* Top post slider track */}
            <div className={`w-[calc(30vw * ${posts.length + 1})] h-[80%] flex items-center space-x-5`}>
                {posts.map((post, index) => (
                    <div
                        key={post.id}
                        className="slide h-full  w-[40vw] sm:w-[80vw] relative rounded-2xl pt-[220px] pl-[10px]"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${post.img})`,
                            backgroundSize: "cover"
                        }}
                    >

                        <div className="event bg-blue-800 absolute rounded-md top-8 left-3 w-32 h-8 text-white  flex items-center justify-center">
                            {post.category}
                        </div>
                        <div className=" text-white">
                        <h1 className='text-4xl mb-10 font-gobold'>{post.title}</h1>
                        <p className='sm:hidden md:hidden'>{post.shortText} <Link href="#" className='text-[#07a034]'>see more &rarr;</Link></p>
                        <div className="flex items-center justify-evenly lg:hidden">
                        <p><FaEye className='inline-block text-[#07a034]'/> {post.veiws} views</p>
                        <p><FaCalendar className='inline-block text-[#07a034]'/> {post.day}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
