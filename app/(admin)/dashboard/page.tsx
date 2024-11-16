"use client";
import { FaCalendar, FaEye, FaRegCopy } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import getSession from "@/utils/getSession";
import { useSession } from "next-auth/react";
import { SubscriberInterface } from "@/models/Subscriber";
import axios from "axios";
import posts from "@/utils/blogPosts";
=======
import { useState, useRef } from "react";
>>>>>>> 27c6998b0ea2baa20a681f81b11e4fa912277375

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
<<<<<<< HEAD
  
=======

  const blog = useRef<HTMLDivElement | null>(null);
  const subcribe = useRef<HTMLDivElement | null>(null);

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
>>>>>>> 27c6998b0ea2baa20a681f81b11e4fa912277375

  function subs() {
    subcribers.join();
  }

  // useEffect(()=>{

  // },[views,shares,growthRate])

  function showSubcriber(e:any){
    e.target.classList.add("bg-white")
    e.target.classList.add("text-[#07a034]")
    e.target.parentElement.firstElementChild.classList.remove("bg-white")
    e.target.parentElement.firstElementChild.classList.remove("text-[#07a034]")
    if(subcribe.current){
      subcribe.current.style.display = "block"
    }
    if(blog.current){
      blog.current.style.display = "none"
    }
  }

  
  function showBlog(e:any){
    e.target.classList.add("bg-white")
    e.target.classList.add("text-[#07a034]")
    e.target.parentElement.lastElementChild.classList.remove("bg-white")
    e.target.parentElement.lastElementChild.classList.remove("text-[#07a034]")
    if(subcribe.current){
      subcribe.current.style.display = "none"
    }
    if(blog.current){
      blog.current.style.display = "block"
    }
  }

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
      <div className="w-[90vw] mx-auto relative my-20 h-[1100px] sm:flex sm:flex-col sm:items-center sm:top-[150px] md:flex md:justify-center ">
        <div className="inline-block bg-blue-950 h-[250px] w-[75%] mr-7 text-white  rounded-2xl sm:w-[90%] md:w-[90%] sm:mx-auto md:mx-auto">
          <h1 className="text-center my-11">
            Your Blog <span className="text-[#07a034]">Performance</span>
          </h1>
          <div className="flex items-center justify-evenly text-center">
            <div className="">
              <p className="sm:text-sm sm:mt-[35px]">Total views</p>
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
              <p className="sm:text-sm sm:mt-[35px]">Shares</p>
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
<<<<<<< HEAD
            {subcribers.map((subscriber, id) => (
              <p key={id} className="h-[50px] flex items-center justify-evenly">
                {subscriber.email}{" "}
=======
            {subcribers.map((sub, id) => (
              <div
                key={id}
                className="h-[50px] flex items-center justify-evenly"
              >
                <p className="w-[70%] overflow-hidden">{sub}</p>{" "}
>>>>>>> 27c6998b0ea2baa20a681f81b11e4fa912277375
                <FaRegCopy
                  onClick={() => window.navigator.clipboard.writeText(subscriber.email)}
                  className="hover:text-slate-700"
                />
              </div>
            ))}
          </div>
        </div>
        {/* BLog post and subcribers in mobile */}
        <div className="w-[75%] h-[700px] bg-white sm:bg-transparent md:bg-transparent absolute top-[300px] flex flex-col items-center sm:w-[95%] md:w-[90%]">
          <h1 className="font-gobold md:hidden sm:hidden text-2xl text-center my-5">
            Explore Your Post
          </h1>
          <div className="w-full h-10 lg:hidden flex justify-evenly">
            <h1 className="font-gobold text-3xl rounded-t-2xl bg-white w-[50%] text-center text-[#07a034]" onClick={showBlog}>Blog Post</h1>
            <h1 className="font-gobold text-3xl rounded-t-2xl w-[50%] h- text-center " onClick={showSubcriber}>Subcribers</h1>
          </div>
          <div className="w-full h-70% flex md:flex-col sm:flex-col bg-white justify-evenly overflow-scroll ">
            <div
              ref={blog}
              className="w-full"
              style={{
                height: `calc(${blog.current?.style.height} * ${posts.length + 1})`,
              }}
            >
              {posts.map((post, id) => (
                <div
                  className="flex sm:flex-col md:flex-col items-center justify-evenly h-auto md:h-[500px] sm:h-[500px] sm:w-[300px] mx-auto lg:w-[80%] space-x-3 md:w-[500px]"
                  key={id}
                >
                  <div className="lg:w-[50%] w-full h-[150px] overflow-hidden">
                    <img src={post.img} alt={post.title} className="" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between w-full sm:space-x-10 lg:space-x-20 sm:text-sm">
                      <div className="event bg-blue-800 rounded-md w-28 h-8 text-white flex items-center justify-center">
                        {post.category}
                      </div>
                      <p>
                        <FaEye className="inline-block text-[#07a034]" />{" "}
                        {post.veiws} views
                      </p>
                      <p>
                        <FaCalendar className="inline-block text-[#07a034]" />{" "}
                        {post.day}
                      </p>
                      <p className="text-white bg-[#07a034] sm:hidden md:hidden w-[150px] text-center rounded-xl">
                        <FaEdit className="inline-block" /> Edit post
                      </p>
                    </div>
                    <div className="">
                      <h1 className="font-gobold text-4xl">{post.title}</h1>
                      <p>
                        {post.shortText}{" "}
                        <Link href="#" className="text-[#07a034]">
                          see more &rarr;
                        </Link>
                      </p>
                    </div>
                    <p className="text-white bg-[#07a034] lg:hidden w-[150px] text-center rounded-xl">
                        <FaEdit className="inline-block" /> Edit post
                      </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white h-[780px] w-full overflow-y-scroll hidden " ref={subcribe}>
              <h1 className=" text-2xl my-4 flex justify-evenly font-gobold">
                Your Subcribers{" "}
                <FaRegCopy onClick={subs} className="hover:text-slate-700" />
              </h1>
              <div
                className="w-full"
                style={{ height: `calc(50px * ${subcribers.length + 1})` }}
              >
                {subcribers.map((sub, id) => (
                  <div
                    key={id}
                    className="h-[50px] flex items-center justify-evenly"
                  >
                    <p className="w-[70%] overflow-hidden">{sub}</p>{" "}
                    <FaRegCopy
                      onClick={() => window.navigator.clipboard.writeText(sub)}
                      className="hover:text-slate-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
