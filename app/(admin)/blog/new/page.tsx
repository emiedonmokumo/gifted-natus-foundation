// page.tsx
'use client'
import React from 'react';
import dynamic from "next/dynamic";

// Dynamically import BlogEditor with client-side rendering
const BlogEditor = dynamic(() => import("@/app/components/BlogEditor"), { ssr: false });

const Page: React.FC = () => {
  return (
    <div>
      <BlogEditor id={null}/>
    </div>
  );
};

export default Page;
