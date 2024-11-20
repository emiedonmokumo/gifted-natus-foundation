// BlogEditor.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import TagInput from "./TagInput";
import MetaDataInput from "./MetaDataInput";

type HandlerFunction = (value: any) => void;

interface MyCustomModule {
  addHandler: (eventName: string, handler: HandlerFunction) => void;
}

interface IBlog {
  title: string;
  img: string;
  _id: string;
  content: string;
}

const BlogEditor = ({ id, editorRef, quillInstanceRef, editBlog, setEditBlog, handleSubmit, setPostImage,}: { id: string | any; editorRef: any; quillInstanceRef: any; editBlog: any; setEditBlog: any; handleSubmit: any; setPostImage: any;}) => {

  const [post, setPost] = useState<IBlog>()

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  useEffect(() => {
    if (quillInstanceRef.current || !editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
      },
    });
    quillInstanceRef.current = quill;

    const toolbarModule = quill.getModule("toolbar") as MyCustomModule;

    toolbarModule.addHandler("image", () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files ? input.files[0] : null;
        if (file) {
          const formData = new FormData();
          formData.append("image", file);

          try {
            const response = await axios.post("/api/upload/image", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200) {
              const { url } = response.data;
              const range = quill.getSelection();
              quill.insertEmbed(range?.index || 0, "image", url);
            } else {
              console.log("Error uploading image:", response);
            }
          } catch (error) {
            console.error("Image upload failed:", error);
          }
        }
      };
    });
    
  }, []);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPostImage(e.target.files[0]);
    }
  };

  function handleLoad(e:any){
      if(id){
        e.target.innerHTML = editBlog.content;
      }
  }

  return (
    <div>
      <header className="bg-slate-900">
        <Nav />
      </header>
      <div className="my-4 ml-11">
        <label className="block mb-2">Post Image:</label>
        <input
          type="file"
          accept="image/*"
          className="border border-gray-300 p-2 w-full mb-4"
          onChange={handleImageChange}
        />
        <label className="block mb-2">Title:</label>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full mb-4"
          placeholder="Enter blog title"
          value={editBlog.title || ""}
          onChange={(e) => setEditBlog({ ...editBlog, title: e.target.value })}
        />
        <label className="block mb-2">Short Description:</label>
        <textarea
          className="border border-gray-300 p-2 w-full mb-4"
          placeholder="Enter short description"
          value={editBlog.description || ""}
          onChange={(e) => setEditBlog({ ...editBlog, description: e.target.value })}
        ></textarea>
        <TagInput editBlog={editBlog} setEditBlog={setEditBlog} />
        <MetaDataInput editBlog={editBlog} setEditBlog={setEditBlog} />
      </div>

      {/* Rich text editor */}
      <div
        ref={editorRef}
        className="mt-4 border border-gray-300 rounded-md shadow-md"
        style={{ height: "500px" }}
        onFocus={handleLoad}
      ></div>
      <div className="my-4 ml-11">
        <button
          onClick={handleSubmit}
          className="w-40 h-9 mr-4 bg-green-600 text-white flex items-center justify-center"
        >
          Submit Blog
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogEditor;
