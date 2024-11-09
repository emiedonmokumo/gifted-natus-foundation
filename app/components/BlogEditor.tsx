// BlogEditor.tsx
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
    if (quillInstanceRef.current || !editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
    });
    quillInstanceRef.current = quill;

    const toolbarModule = quill.getModule('toolbar') as MyCustomModule;

    toolbarModule.addHandler('image', () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.onchange = async () => {
        const file = input.files ? input.files[0] : null;
        if (file) {
          const formData = new FormData();
          formData.append('image', file);

          try {
            const response = await axios.post('/api/upload/image', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200) {
              const { url } = response.data;
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
  }, []);

  const handleSubmit = async () => {
    if (quillInstanceRef.current) {
      const editorContent = quillInstanceRef.current.root.innerHTML; // Extract content as HTML

      try {
        const response = await axios.post('/api/blog/submit', { content: editorContent });

        if (response.status === 200) {
          console.log('Content submitted successfully:', response.data);
          alert('Blog content submitted successfully!');
        } else {
          console.log('Error submitting content:', response);
        }
      } catch (error) {
        console.error('Submission failed:', error);
        alert('Failed to submit blog content.');
      }
    }
  };

  return (
    <div>
      <header className='bg-slate-900'>
        <Nav />
      </header>
      <div ref={editorRef} className="mt-4 border border-gray-300 rounded-md shadow-md" style={{ height: "500px" }}></div>
      <div className="my-4 ml-11">
        <button 
          onClick={handleSubmit} 
          className='w-40 h-9 mr-4 bg-green-600 text-white flex items-center justify-center'
        >
          Submit Blog
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogEditor;
