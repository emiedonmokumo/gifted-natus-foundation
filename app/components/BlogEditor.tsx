"use client";
import React, { useEffect, useRef, useState } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import ImageUploadForm from "./Image";

type HandlerFunction = (value: any) => void;

interface MyCustomModule {
  addHandler: (eventName: string, handler: HandlerFunction) => void;
}

const BlogEditor = ({ id }: { id: string | null }) => {
  const [editBlog, setEditBlog] = useState<any>({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstanceRef = useRef<Quill | null>(null);

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

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setTags((prev) => [...prev, value]);
    } else {
      setTags((prev) => prev.filter((tag) => tag !== value));
    }
  };

  const handleSubmit = async () => {
    if (quillInstanceRef.current) {
      const editorContent = quillInstanceRef.current.root.innerHTML;

      try {
        const response = await axios.post("/api/blog/submit", {
          title,
          description,
          tags,
          content: editorContent,
        });

        if (response.status === 200) {
          console.log("Content submitted successfully:", response.data);
          alert("Blog content submitted successfully!");
        } else {
          console.log("Error submitting content:", response);
        }
      } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to submit blog content.");
      }
    }
  };

  return (
    <div>
      <header className="bg-slate-900">
        <Nav />
      </header>
      <div className="p-4">
        <form className="mb-4">
          <div className="mb-2">
            <ImageUploadForm/>
            <label htmlFor="title" className="block mb-1">Title</label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your blog"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="description" className="block mb-1">Short Description</label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a short description of your blog"
            />
          </div>

          <div className="mb-2">
            <label className="block mb-1">Tags</label>
            <div className="flex gap-4">
              {["event", "environment", "welfare", "health", "youth"].map((tag) => (
                <label key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    value={tag}
                    checked={tags.includes(tag)}
                    onChange={handleTagChange}
                    className="mr-1"
                  />
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </form>
        <div
          ref={editorRef}
          className="mt-4 border border-gray-300 rounded-md shadow-md"
          style={{ height: "500px" }}
        ></div>
        <div className="my-4">
          <button
            onClick={handleSubmit}
            className="w-40 h-9 bg-green-600 text-white flex items-center justify-center"
          >
            Submit Blog
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogEditor;
