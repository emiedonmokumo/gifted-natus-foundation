"use client"
import Nav from "@/app/components/Nav";
import Post from "@/app/components/Post"
import TopPost from "@/app/components/TopPost";



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
