// page.tsx
'use client'
import React, { useRef, useState } from 'react';
import dynamic from "next/dynamic";
import Quill from 'quill';
import axios from 'axios';

// Dynamically import BlogEditor with client-side rendering
const BlogEditor = dynamic(() => import("@/components/BlogEditor"), { ssr: false });

const Page: React.FC = () => {
  const [editBlog, setEditBlog] = useState<any>({});
  const editorRef = useRef<HTMLDivElement | any>();
  const quillInstanceRef = useRef<Quill | any>(); // Store the instance reference
  const [postImage, setPostImage] = useState<File | null>(null);


  const handleSubmit = async () => {
    // console.log(quillInstanceRef.current?.getText().trim() === "")
    if (quillInstanceRef.current?.getText().trim() === "") {
      alert('Post content is required!')
      return
    }
    
    const editorContent = quillInstanceRef.current.root.innerHTML; // Extract content as HTML
    console.log({...editBlog, content: editorContent})

    const formData = new FormData()

    if (postImage) {
      formData.append("img", postImage);
    }

    formData.append('content', editorContent)
    formData.append('metaDescription', editBlog.metaDescription)
    formData.append('metaTitle', editBlog.metaTitle)
    formData.append('tags', editBlog.tags)
    formData.append('title', editBlog.title)
    formData.append('description', editBlog.description)
    // formData.append('img', postImage)

    try {
      const response = await axios.post("/api/blog", formData);
      console.log({content: editorContent, ...editBlog, img: postImage})

      if (response.status == 201) {
        console.log("Content submitted successfully:", response.data);
        alert("Blog content submitted successfully!");
      } 

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit blog content.");
    }
  };

  return (
    <div>
      <BlogEditor setPostImage={setPostImage} id={null} editorRef={editorRef} quillInstanceRef={quillInstanceRef} editBlog={editBlog} setEditBlog={setEditBlog} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Page;
