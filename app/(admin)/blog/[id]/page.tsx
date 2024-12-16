"use client";
import Link from "next/link";
import RelatedPost from "@/components/relatedPost";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";

interface IBlog {
  title: string;
  img: string;
  _id: string;
  content: string;
  metaDescription: string;
  metaTitle: string;
}

export default function Dashboard({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<IBlog | undefined>();
  const html = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function recievePost() {
      try{
        const blogPostFetch = await fetch(`/api/blog/${params.id}`)
      if(blogPostFetch.status == 200) setPost(await blogPostFetch.json())
        console.log(post)
      }catch(error){
        console.log(`there was an error:${error}`)
    }
    }
    
    recievePost()
  }, [params.id]);

  useEffect(() => {
    if (html.current && post) {
      html.current.innerHTML = post.content;
    }
  }, [post]); // Ensure this runs whenever `post` changes.

  return (
    <div className="">
      <Head>
        <meta
        property="og:image"
        content= {post?.img} 
        />
        <meta
        property="og:description"
        content={post?.metaDescription} 
        />
        <meta
        property="og:title"
        content={post?.metaTitle} 
        />
        <meta
        property="twitter:image"
        content={post?.img} 
        />
        <meta
        property="twitter:description"
        content={post?.metaDescription} 
        />
        <meta
        property="twitter:title"
        content={post?.metaTitle} 
        />
      </Head>
      <header className="bg-slate-950 pt-36">
        <Nav />
      </header>
      <main>
      <h1 className="text-4xl text-center font-gobold mt-[100px] my-11">{post?.title}</h1>
        {post && (
          <div
            className="h-[70vh] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.img})`,
            }}
          ></div>
        )}
        
        <div ref={html} className="px-6 py-6 text-justify content size"></div>
        <div className="mt-11">
          <div className="flex items-center justify-evenly">
          <h1 className="text-3xl">Other <span className="text-[#07a034]">ARTICLES</span></h1>
          <div className="w-[30vh] h-[5px] bg-black">

          </div>
          </div>
          <RelatedPost />
        </div>
      </main>
      <Footer />
    </div>
  );
}
