"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import { FaCalendar, FaEye } from "react-icons/fa6";
import axios from "axios";

interface Post {
  img: string;
  title: string;
  day: string;
  veiws: string;
  id: number;
  shortText: string;
  category: string;
}

export default function Post() {
  const filters: string[] = ["all", "Health", "Welfare", "Youth", "Events", "Environment"];
  const [posts , setPosts] = useState<any>([])
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4; // Customize the number of posts per page

useEffect(()=>{
async function recievePost() {
  try{
    const blogPostFetch = await fetch("/api/blog")
  if(blogPostFetch.status == 200) setPosts(await blogPostFetch.json())
    console.log(posts)
  }catch(error){
    console.log(`there was an error:${error}`)
}
}

recievePost()
},[])

  // Filter posts based on the selected category
  const filteredPosts = selectedFilter === "all"
    ? posts
    : posts.filter((post:any) => post.tag[0].toLowerCase() === selectedFilter.toLowerCase());

  // Get the posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  for(let i=0; i < posts.length; i++){
    console.log(posts[i].tags[0])
  }

  return (
    <div className="space-y-16 mt-12 overflow-scroll">
      <div className="w-[80%] sm:w-full h-14 bg-black flex items-center mx-auto">
        {filters.map((filter, id) => (
          <div
            key={id}
            onClick={() => {
              setSelectedFilter(filter);
              setCurrentPage(1); // Reset to the first page when the filter changes
            }}
            className={`text-white sm:text-[10px] w-[20%] h-full flex items-center justify-center cursor-pointer ${
              selectedFilter === filter ? "bg-[#07a034]" : ""
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-between  lg:w-[75%] mx-auto">
        {currentPosts.map((post:any) => (
          <div
            className="flex flex-col items-center justify-evenly overflow-hidden sm:h-[500px] h-[400px] sm:w-[300px] md:mx-auto sm:mx-auto lg:w-[360px] md:w-[500px]"
            key={post.id}
          >
           <div className="w-full h-[150px] overflow-hidden">
           <img src={post.img} alt={post.title} className="" />
           </div>
            <div>
              <div className="flex items-center justify-between w-full sm:space-x-10 lg:space-x-20">
                <div className="event bg-blue-800 rounded-md w-28 h-8 text-white flex items-center justify-center">
                  {post.tags[0]}
                </div>
                <p><FaEye className="inline-block text-[#07a034]" /> {post.views} views</p>
                <p><FaCalendar className="inline-block text-[#07a034]" /> {post.day}</p>
              </div>
              <div className="">
                <h1 className="font-gobold text-4xl">{post.title}</h1>
                <p>{post.shortText} <Link href={`/blog/${post.id}`} className="text-[#07a034]">see more &rarr;</Link></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-black mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-black disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
