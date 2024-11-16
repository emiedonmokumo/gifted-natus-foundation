"use client"
import Nav from "@/components/Nav";
import Post from "@/components/Post"
import TopPost from "@/components/TopPost";

export default function Blog(){
    return(
        <>
            <header className="w-screen bg-black">
                <Nav/>
            </header>
            <TopPost/>
            <Post/>
        </>
    )
} 
