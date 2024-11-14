"use client";
import { FaCalendar, FaEye, FaRegCopy } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import getSession from "@/utils/getSession";
import { useSession } from "next-auth/react";
import { SubscriberInterface } from "@/models/Subscriber";
import axios from "axios";
import posts from "@/utils/blogPosts";

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
  // Get session of user
  const { data: session } = useSession();
  useEffect(()=>{
    const fetchSubscribers = async () =>{
      const response = await axios.get('/api/subscriber')
      
      if(response.status == 200) setSubcribers(response.data)
    }

    fetchSubscribers()
  },[session])

  const [subcribers, setSubcribers] = useState<SubscriberInterface[]>([])
  const [views, setViews] = useState<string>("34k");
  const [shares, setShares] = useState<string>("39k");
  const [growthRate, setGrowthrate] = useState<string>("28%");
  

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
      <div className=" bg-white mx-auto flex items-center justify-between my-9 rounded-xl px-24 sm:flex-col-reverse sm:absolute sm:top-[150px] sm:left-[5%] sm:p-5">
        <div className="flex items-center justify-evenly flex-col">
          <h2 className="text-slate-800 text-3xl text-center sm:text-xl">Welcome back</h2>
          <h1 className="text-[#07a034] text-4xl text-center md:text-3xl font-medium sm:text-xl">{`${session?.user.firstName} ${session?.user.lastName} ${session?.user.othernames}`}</h1>
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
            {subcribers.map((subscriber, id) => (
              <p key={id} className="h-[50px] flex items-center justify-evenly">
                {subscriber.email}{" "}
                <FaRegCopy
                  onClick={() => window.navigator.clipboard.writeText(subscriber.email)}
                  className="hover:text-slate-700"
                />
              </p>
            ))}
          </div>
        </div>
      {/* BLog post and subcribers in mobile */}
            <div className="w-[75%] h-[700px] bg-white absolute top-[300px] flex flex-col items-center">
              <h1 className="font-gobold md:hidden sm:hidden text-2xl text-center my-5">Explore Your Post</h1>
              <div className="w-full h-70% flex md:flex-col sm:flex-col  justify-evenly overflow-scroll">
                <div className="w-full" style={{
                  height:`calc(500px * ${posts.length + 1})`
                }}>
                    {posts.map((post, id) => (
                      <div
                        className="flex sm:flex-col md:flex-col items-center justify-evenly sm:h-[500px] h-[400px] sm:w-[300px] mx-auto lg:w-[80%] space-x-3 md:w-[500px]"
                        key={id}
                      >
                        <img src={post.img} alt={post.title} className="w-[50%] h-[150px]" />
                        <div>
                          <div className="flex items-center justify-between w-full sm:space-x-10 lg:space-x-20">
                            <div className="event bg-blue-800 rounded-md w-28 h-8 text-white flex items-center justify-center">
                              {post.category}
                            </div>
                            <p><FaEye className="inline-block text-[#07a034]" /> {post.veiws} views</p>
                            <p><FaCalendar className="inline-block text-[#07a034]" /> {post.day}</p>
                            <p className="text-white bg-[#07a034] sm:hidden md:hidden w-[150px] text-center rounded-xl"><FaEdit className="inline-block" /> Edit post</p>
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
