import { FaCalendar, FaEye } from "react-icons/fa6";
import Link from "next/link";
import { useEffect,useState } from "react";
import Post from "./Post";


interface Post {
  img: string;
  title: string;
  day: string;
  views: string;
  _id: string;
  shortText: string;
  category: string;
}

const Slider = () => {
  const [post,setPost]=useState<Post[]>()
  
useEffect(()=>{
  
  async function recievePost() {
    try{
      const blogPostFetch = await fetch("/api/blog")
    if(blogPostFetch.status == 200) setPost(await blogPostFetch.json())
      console.log(post)
    }catch(error){
      console.log(`there was an error:${error}`)
  }
  }
  
  recievePost()
  },[])
 
  return (
    <div className="max-w-6xl mx-auto py-10" id="blog">
      {/* Slider Container */}
      <div className="flex overflow-x-scroll space-x-4 lg:w-[80%] mx-auto no-scrollbar">
        {/* Card 1 */}
        {post && post.map((article:Post, index)=>(
            
        <div className="max-w-[300px] bg-gray-900 text-white p-5 rounded-lg flex-shrink-0" key={article.title+index}>
        <img
          className="rounded-lg w-full h-40 object-cover"
          src={article.img}
          alt={article.title}
        />
        <Link href={`/blog/${article._id}`} className="mt-4 text-lg font-bold">{article.title}</Link>
        <div className="flex justify-between items-center text-sm mt-4">
          <span>{article.views}  views <FaEye className="text-[#07a034] text-1xl inline-block"/></span>
        </div>
      </div>
        ))}
        </div>
        {/* See All */}
      <div className="mt-8 text-center">
        <a href="/blog" className="text-lg text-green-500 font-semibold hover:underline">
          See all →
        </a>
      </div>
    </div>
  );
};

export default Slider;
