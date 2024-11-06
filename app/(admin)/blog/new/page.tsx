'use client';
import React, { useEffect, useRef } from 'react';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';

type HandlerFunction = (value: any) => void;

interface MyCustomModule {
  addHandler: (eventName: string, handler: HandlerFunction) => void;
}

const BlogEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstanceRef = useRef<Quill | null>(null); // Store the instance reference

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ];

  useEffect(() => {
    // Ensure the editor is only initialized once
    if (quillInstanceRef.current || !editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
    });
    quillInstanceRef.current = quill; // Store the instance

    const toolbarModule = quill.getModule('toolbar') as MyCustomModule;

    // Add custom image handler
    toolbarModule.addHandler('image', () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.onchange = async () => {
        const file = input.files ? input.files[0] : null;
        if (file) {
          const formData = new FormData();
          formData.append('image', file); // 'image' is the field name on the server
      
          try {
            const response = await axios.post('/api/upload/image', formData, {
              headers: {
                'Content-Type': 'multipart/form-data', // This is necessary for form data
              },
            });
      
            if (response.status === 200) {
              const { url } = response.data; // destructure the response
      
              // Insert image into the editor
              const range = quill.getSelection();
              quill.insertEmbed(range?.index || 0, 'image', url);
            } else {
              console.log('Error uploading image:', response);
            }
          } catch (error) {
            console.error('Image upload failed:', error);
          }
        }
      };
      

    });
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <header className='bg-slate-900'>
        <Nav />
      </header>
      <div ref={editorRef} className="mt-4 border border-gray-300 rounded-md shadow-md h-screen"></div>
      <div className="h-[50vh] w-screen bg-white"></div>
      <Footer />
    </div>
  );
};

export default BlogEditor;
