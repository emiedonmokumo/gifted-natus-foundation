"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import blog from "../../../../public/json/blog.json";
import { useEffect, useState, useRef } from "react";

interface IBlog {
  title: string;
  image: string;
  id: string;
  text: string;
}

export default function Dashboard({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<IBlog | undefined>();
  const html = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    for (let i = 0; i < blog.length; i++) {
      if (blog[i].id === params.id) {
        setPost(blog[i]);
        console.log(blog[i])
      }
    }
  }, [params.id]);

  useEffect(() => {
    if (html.current && post) {
      html.current.innerHTML = post.text;
    }
  }, [post]); // Ensure this runs whenever `post` changes.

  return (
    <div className="">
      <header className="bg-slate-950">
        <Nav />
      </header>
      <main>
        {post && (
          <div
            className="h-[50vh] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.image})`,
            }}
          ></div>
        )}
        
        <div ref={html}></div>
      </main>
      <Footer />
    </div>
  );
}