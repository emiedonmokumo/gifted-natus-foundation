"use client";
import { FaCalendar, FaEye, FaRegCopy } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import getSession from "@/utils/getSession";
import { useSession } from "next-auth/react";
import { SubscriberInterface } from "@/models/Subscriber";
import axios from "axios";
import BlogPost from "@/components/BlogPost";
// import posts from "@/utils/blogPosts";

interface Post {
  img: string;
  title: string;
  day: string;
  veiws: string;
  id: number;
  shortText: string;
  category: string;
}

interface Ivolunteer {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
}

export default function Dashboard() {
  // Get session of user
  const { data: session } = useSession();


  const [subcribers, setSubcribers] = useState<SubscriberInterface[]>([])
  const [views, setViews] = useState<string>("34k");
  const [shares, setShares] = useState<string>("39k");
  const [growthRate, setGrowthrate] = useState<string>("28%");

  const blog = useRef<HTMLDivElement | null>(null);

  const subcribe = useRef<HTMLDivElement | null>(null);
  const volunt = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const fetchSubscribers = async () =>{
      const response = await axios.get('/api/subscriber')
      
      if(response.status == 200) setSubcribers(response.data)
    }

    fetchSubscribers()
  },[session])

  // const subcribers: string[] = [
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  //   "joe@gmail.com",
  // ];

  const volunteers: Ivolunteer[] = [
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
    {
      firstName: "Tonware-emi",
      lastName: "zakana",
      address: "new yorks, chevon, boston street, no 4, peters compound",
      phone: "09078777000",
      email: "tonwareemizakana@gmail.com",
    },
  ];

  function subs() {
    window.navigator.clipboard.writeText(subcribers.join(", "))
  }

  function showSubcriber(e: any) {
    e.target.classList.add("bg-white");
    e.target.classList.add("text-[#07a034]");
    e.target.parentElement.firstElementChild.classList.remove("bg-white");
    e.target.parentElement.firstElementChild.classList.remove("text-[#07a034]");
    e.target.parentElement.lastElementChild.classList.remove("bg-white");
    e.target.parentElement.lastElementChild.classList.remove("text-[#07a034]");
    if (subcribe.current) {
      subcribe.current.style.display = "block";
    }
    if (blog.current) {
      blog.current.style.display = "none";
    }

    if (volunt.current) {
      volunt.current.style.display = "none";
    }
  }

  function showBlog(e: any) {
    e.target.classList.add("bg-white");
    e.target.classList.add("text-[#07a034]");
    e.target.nextElementSibling.classList.remove("bg-white");
    e.target.nextElementSibling.classList.remove("text-[#07a034]");
    e.target.parentElement.lastElementChild.classList.remove("text-[#07a034]");
    e.target.parentElement.lastElementChild.classList.remove("bg-white");
    if (subcribe.current) {
      subcribe.current.style.display = "none";
    }
    if (blog.current) {
      blog.current.style.display = "block";
    }
    if (volunt.current) {
      volunt.current.style.display = "none";
    }
  }

  function showVolunteers(e: any) {
    e.target.classList.add("bg-white");
    e.target.classList.add("text-[#07a034]");
    e.target.parentElement.firstElementChild.classList.remove("bg-white");
    e.target.parentElement.firstElementChild.classList.remove("text-[#07a034]");
    e.target.previousElementSibling.classList.remove("text-[#07a034]");
    e.target.previousElementSibling.classList.remove("bg-white");
    if (subcribe.current) {
      subcribe.current.style.display = "none";
    }
    if (blog.current) {
      blog.current.style.display = "none";
    }
    if (volunt.current) {
      volunt.current.style.display = "block";
    }
  }

  return (
    <div className="bg-slate-200">
      <header className="bg-slate-800 sm:h-[300px]">
        <Nav />
      </header>
      {/*welcome section*/}
      <div className=" bg-white mx-auto flex items-center justify-between my-9 rounded-xl px-24 sm:flex-col-reverse sm:absolute sm:top-[100px] sm:left-0 sm:right-0 sm:mx-5 sm:p-5">
        <div className="flex items-center justify-evenly flex-col">
          <h2 className="text-slate-800 text-3xl text-center sm:text-xl sm:mt-3">Welcome back</h2>
          <h1 className="text-[#07a034] text-5xl text-center md:text-3xl font-semibold sm:text-xl">{`${session?.user.firstName} ${session?.user.lastName} ${session?.user.othernames}`}</h1>
        </div>
        <img src="/team1.png" alt="" className="rounded-full sm:h-36 sm:w-36" />
      </div>
      {/*statistics blog and subcribers section*/}

      {/* blog statistics */}
      <div className="lg:w-[90vw] md:w-[90vw] mx-auto relative lg:my-20 sm:mb-20 md:my-20 h-[1100px] sm:flex sm:flex-col sm:items-center sm:top-[150px] md:flex md:justify-center ">
        <div className="lg:inline-block lg:h-[250px] lg:w-[75%] lg:mr-7 md:mr-7 text-white md:inline-block bg-blue-950 md:mx-auto rounded-2xl md:w-[90%] md:h-[250px] sm:w-full sm:py-16 sm:mx-4 ">
          {/*   bg-blue-950       */}
          <h1 className="text-center lg:my-11 md:my-11 sm:text-sm mb-8">
            Your Blog <span className="text-[#07a034]">Performance</span>
          </h1>
          <div className="flex items-center justify-center sm:px-5 text-center">
            <div className="">
              <p className="text-xl">Total views</p>
              <h1 className="text-2xl font-semibold flex items-center justify-evenly space-x-2 sm:text-xl">
                {" "}
                <FaEye className="text-[#07a034] text-3xl sm:text-xl" /> {views}
              </h1>
            </div>
            {/* <div className="">
              <p className="sm:text-xs text-center mx-auto">
                Growth
              </p>
              <h1 className="text-5xl flex items-center justify-evenly space-x-2 sm:text-xl">
                <BsBarChartFill className="text-[#07a034] text-3xl sm:text-xl" />{" "}
                {growthRate}
              </h1>
            </div> */}
            {/* <div className="">
              <p className="sm:text-xs sm:mt-[35px]">Shares</p>
              <h1 className="text-5xl flex items-center justify-evenly space-x-2 sm:text-xl">
                <IoShareSocialSharp className="text-[#07a034] text-3xl sm:text-xl" />{" "}
                {shares}
              </h1>
            </div> */}
          </div>
        </div>

        {/* subcribers in desktop */}
        <div className="inline-block bg-white absolute top-0 right-0 h-[600px] w-[20%] overflow-y-scroll sm:hidden md:hidden">
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
        <div className="w-[75%] h-[700px] bg-white sm:bg-transparent md:bg-transparent absolute top-[300px] flex flex-col items-center sm:w-[99%] md:w-[90%]">
          <h1 className="p-2 md:hidden sm:hidden text-2xl text-center my-5">
            Explore Your Post
          </h1>
          <div className="w-full h-10 lg:hidden flex justify-between">
            <h1
              className="p-2 text-sm bg-white w-[30%] text-center text-[#07a034]"
              onClick={showBlog}
            >
              Post
            </h1>
            <h1
              className="p-2 text-sm w-[30%] h- text-center "
              onClick={showSubcriber}
            >
              Subcribers
            </h1>
            <h1
              className="p-2 text-sm w-[30%] h- text-center "
              onClick={showVolunteers}
            >
              volunteers
            </h1>
          </div>

          {/* Blog Posts */}
          <BlogPost blog={blog} />
          
          {/*SUBCRIBERS MOBILE */}
          <div
            className="bg-white h-[780px] w-full overflow-y-scroll hidden "
            ref={subcribe}
          >
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
                  <p className="w-[70%] overflow-hidden">{sub.email}</p>{" "}
                  <FaRegCopy
                    onClick={() => window.navigator.clipboard.writeText(sub.email)}
                    className="hover:text-slate-700"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* VOLUNTEER MOBILE */}
          <div
            className=" h-[480px] w-full bg-white overflow-y-scroll hidden "
            ref={volunt}
          >
            <div
              className="w-full"
              style={{ height: `calc(150px * ${subcribers.length + 1})` }}
            >
              {volunteers.map((volun, id) => (
                <div
                  key={id}
                  className="h-[200px]  border-t border-t-slate-900 border-solid  mt-2 flex flex-col items-center justify-evenly"
                >
                  <p className=" w-[80%] overflow-scroll">
                    {volun.firstName + " " + volun.lastName}
                  </p>
                  <p className=" w-[80%] overflow-scroll">{volun.phone}</p>
                  <p className=" w-[80%] overflow-scroll">{volun.email}</p>
                  <p className=" w-[80%] overflow-scroll">{volun.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* desktop version of volunteers */}
        <div className="bg-white absolute top-[650px] w-[20%] right-0 hidden">
          <h1 className="font-gobold text-3xl text-center"> Volunteers</h1>
          <div className=" h-[480px] w-full overflow-y-scroll ">
            <div
              className="w-full"
              style={{ height: `calc(150px * ${subcribers.length + 1})` }}
            >
              {volunteers.map((volun, id) => (
                <div
                  key={id}
                  className="h-[200px]  border-t border-t-slate-900 border-solid  mt-2 flex flex-col items-center justify-evenly"
                >
                  <p className=" w-[80%]">
                    {volun.firstName + " " + volun.lastName}
                  </p>
                  <p className=" w-[80%] ">{volun.phone}</p>
                  <p className=" w-[80%]">{volun.email}</p>
                  <p className=" w-[80%]">{volun.address}</p>
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
