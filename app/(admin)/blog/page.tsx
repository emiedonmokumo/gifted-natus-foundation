"use client"
import Nav from "@/app/components/Nav";
import Post from "@/app/components/Post"
import TopPost from "@/app/components/TopPost";
import Loader from "@/app/components/Loader";
import { useEffect, useRef } from "react";



export default function Blog(){
    const loading = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    if(document.readyState === "complete" && loading.current){
      loading.current.style.display = "none"
    }
  },[])
    return(
        <>
          <Loader refrence={loading}/>
            <header className="w-screen bg-black">
                <Nav/>
            </header>
            <TopPost/>
            <Post/>
        </>
    )
} 
