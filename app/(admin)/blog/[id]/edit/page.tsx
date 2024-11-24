'use client'
import React, { useEffect, useRef, useState } from 'react';
import dynamic from "next/dynamic";
import Quill from 'quill';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Dynamically import BlogEditor with client-side rendering
const BlogEditor = dynamic(() => import("@/components/BlogEditor"), { ssr: false });

const page = ({ params }: { params: { id: string }}) => {
  const [editBlog, setEditBlog] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [postImage, setPostImage] = useState<File | null>(null);
  const editorRef = useRef<HTMLDivElement | any>();
  const quillInstanceRef = useRef<Quill | any>(); // Store the instance reference
  const router = useRouter();
  const blogId = params.id; // Assuming ID is passed via query parameter (e.g., ?id=123)

  // Fetch the blog data on page load
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!blogId) {
          alert("Blog ID is required.");
          router.push("/blogs"); // Redirect to blogs list
          return;
        }

        const response = await axios.get(`/api/blog/${blogId}`);
        if (response.status === 200) {
          const blogData = response.data;
          setEditBlog({
            title: blogData.title,
            description: blogData.description,
            metadata: blogData.metadata, // Assuming metadata is part of the response
            tags: blogData.tags, // Assuming tags are part of the response
            content:blogData.content
          });
          

          // Load the editor content
          if (quillInstanceRef.current) {
            quillInstanceRef.current.root.innerHTML = blogData.content || ""; // Set Quill content
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
        alert("Failed to fetch blog data.");
        router.push("/blog"); // Redirect on failure
      }
    };

    fetchBlog();
  }, [blogId, router]);

  const handleSubmit = async () => {
    if (!quillInstanceRef.current || quillInstanceRef.current?.getText().trim() === "") {
      alert('Post content is required!');
      return;
    }

    const editorContent = quillInstanceRef.current.root.innerHTML; // Extract content as HTML

    try {
      const response = await axios.put(`/api/blog/${blogId}`, { 
        ...editBlog, 
        content: editorContent 
      });

      if (response.status === 200) {
        console.log("Blog updated successfully:", response.data);
        alert("Blog updated successfully!");
        router.push(`/blogs/${blogId}`); // Navigate to the blog view page
      } 
    } catch (error) {
      console.error("Failed to update blog:", error);
      alert("Failed to update blog content.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>; // Optional: Replace with a spinner or skeleton loader
  }

  return (
    <div className='pt-36'>
      <BlogEditor 
        id={blogId} 
        editorRef={editorRef} 
        quillInstanceRef={quillInstanceRef} 
        editBlog={editBlog} 
        setEditBlog={setEditBlog} 
        handleSubmit={handleSubmit}
        setPostImage={setPostImage}
      />
    </div>
  );
};

export default page;
