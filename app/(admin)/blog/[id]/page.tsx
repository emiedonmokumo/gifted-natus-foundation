"use client"
import Link from "next/link"
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import blog from "../../../../public/json/blog.json"
import {useEffect, useState, useRef} from "react"
import { div } from "framer-motion/client";

export default function Dashboard({ params }: { params: { id: string };
}) {
  const [post,setPost] = useState<any | null>()
  const html = useRef<any | null>()

// const blog = await fetch("localhost:3000/json/blog.json")
// const post = await blog.json()
// console.log(post)

useEffect(()=>{
  for(let i =0;i<blog.length;i++){
    if(blog[i].id == params.id){
      setPost(blog[i])
    }
  }
  if(html.current && post ){
    html.current.innerHTML = post.text
  }
  
},[])

  return(
    <div className="">
        <header className="bg-slate-950">
          <Nav/>
        </header>
        <main>
          {post && <div className="h-[50vh] bg-cover bg-no-repeat" style={{backgroundImage:`linear-gradient( to bottom , rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${post.image})`}}></div>}
          <div ref={html}></div>
        </main>
        <Footer/>
    </div>
  );
}
