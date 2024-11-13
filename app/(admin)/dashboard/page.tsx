"use client";
import { FaCalendar, FaEye, FaRegCopy } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

interface Post {
  img: string;
  title: string;
  day: string;
  veiws: string;
  id: number;
  shortText: string;
  category: string;
}

export default function Dashboard() {
  const [views, setViews] = useState<string>("34k");
  const [shares, setShares] = useState<string>("39k");
  const [growthRate, setGrowthrate] = useState<string>("28%");

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

  const subcribers: string[] = [
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
    "joe@gmail.com",
  ];

  function subs() {
    subcribers.join();
  }

  // useEffect(()=>{

  // },[views,shares,growthRate])
  return (
    <div className="bg-slate-200">
      <header className="bg-slate-800 sm:h-[300px]">
        <Nav />
      </header>
      {/*welcome section*/}
      <div className="w-[90%] h-[200px] bg-white mx-auto flex items-center justify-between my-9 rounded-xl px-24 sm:flex-col-reverse sm:absolute sm:top-[150px] sm:left-[5%]">
        <div className="flex items-center justify-evenly flex-col">
          <h2 className="text-slate-800 text-3xl text-center">Welcome back</h2>
          <h1 className="text-[#07a034] text-5xl text-center">ADMIN</h1>
        </div>
        <img src="/team1.png" alt="" className="rounded-full" />
      </div>
      {/*statistics blog and subcribers section*/}

      {/* blog statistics */}
      <div className="w-[90vw] mx-auto relative my-20 h-[800px] sm:flex sm:flex-col sm:items-center sm:top-[150px] md:flex md:justify-center ">
        <div className="inline-block bg-blue-950 h-[250px] w-[75%] mr-7 text-white  rounded-2xl sm:mx-auto md:mx-auto">
          <h1 className="text-center my-11">
            Your Blog <span className="text-[#07a034]">Performance</span>
          </h1>
          <div className="flex items-center justify-evenly text-center">
            <div className="">
              <p className="sm:text-sm sm:mt-[32px]">Total views</p>
              <h1 className="text-5xl flex items-center justify-evenly space-x-2 sm:text-3xl">
                {" "}
                <FaEye className="text-[#07a034] text-3xl sm:text-xl" /> {views}
              </h1>
            </div>
            <div className="">
              <p className="sm:text-sm sm:w-[30%] text-center mx-auto">
                Veiws Growth rate
              </p>
              <h1 className="text-5xl flex items-center justify-evenly space-x-2 sm:text-3xl">
                <BsBarChartFill className="text-[#07a034] text-3xl sm:text-xl" />{" "}
                {growthRate}
              </h1>
            </div>
            <div className="">
              <p className="sm:text-sm sm:mt-[32px]">Shares</p>
              <h1 className="text-5xl flex items-center justify-evenly space-x-2 sm:text-3xl">
                <IoShareSocialSharp className="text-[#07a034] text-3xl sm:text-xl" />{" "}
                {shares}
              </h1>
            </div>
          </div>
        </div>
        {/* subcribers in desktop */}
        <div className="inline-block bg-white absolute top-0 right-0 h-[780px] w-[20%] overflow-y-scroll sm:hidden md:hidden">
          <h1 className="text-center text-2xl my-4 flex justify-evenly font-gobold">
            Your Subcribers{" "}
            <FaRegCopy onClick={subs} className="hover:text-slate-700" />
          </h1>
          <div
            className="w-full"
            style={{ height: `calc(50px * ${subcribers.length + 1})` }}
          >
            {subcribers.map((sub, id) => (
              <p key={id} className="h-[50px] flex items-center justify-evenly">
                {sub}{" "}
                <FaRegCopy
                  onClick={() => window.navigator.clipboard.writeText(sub)}
                  className="hover:text-slate-700"
                />
              </p>
            ))}
          </div>
        </div>
        {/* */}
            <div className="w-[75%] h-[500px] bg-white absolute top-[300px] ">
              <h1 className="font-gobold md:hidden sm:hidden">Explore Your Post</h1>
              <div className="w-full h-70% overflow-y-scroll flex flex-col items-center justify-evenly">
                <div className="w-full" style={{
                  height:`calc(500px * ${posts.length + 1})`
                }}>
                    {posts.map((post, id) => (
                      <div
                        className="flex flex-col items-center justify-evenly sm:h-[500px] h-[400px] sm:w-[300px] md:mx-auto sm:mx-auto lg:w-[500px] md:w-[500px]"
                        key={id}
                      >
                        <img src={post.img} alt={post.title} className="w-full h-[150px]" />
                        <div>
                          <div className="flex items-center justify-between w-full sm:space-x-10 lg:space-x-20">
                            <div className="event bg-blue-800 rounded-md w-28 h-8 text-white flex items-center justify-center">
                              {post.category}
                            </div>
                            <p><FaEye className="inline-block text-[#07a034]" /> {post.veiws} views</p>
                            <p><FaCalendar className="inline-block text-[#07a034]" /> {post.day} Lorem ipsum dolor sit amet cons</p>
                          </div>
                          <div className="">
                            <h1 className="font-gobold text-4xl">{post.title}</h1>
                            <p>{post.shortText} <Link href="#" className="text-[#07a034]">see more &rarr;</Link></p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
      </div>

      <Footer />
    </div>
  );
}
