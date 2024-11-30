import Nav from "@/components/Nav";
import Post from "@/components/Post"
import TopPost from "@/components/TopPost";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gifted Natus Blog",
    description: "get all the latest news on Gifted Natus Foundation"
}

export default function Blog(){
    return(
        <>
            <header className="w-screen bg-black pt-[100px]">
                <Nav/>
            </header>
            <TopPost/>
            <Post/>
            <Footer/>
        </>
    )
} 
