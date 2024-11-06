'use client';
import React, { useEffect, useRef } from 'react';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

type HandlerFunction = (value: any) => void;

interface MyCustomModule {
  addHandler: (eventName: string, handler: HandlerFunction) => void;
}

const BlogEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstanceRef = useRef<Quill | null>(null); // Store the Quill instance

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
        toolbar: toolbarOptions
      }
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
          formData.append('image', file);

          try {
            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });

            if (!response.ok) {
              throw new Error('Failed to upload image');
            }

            const result = await response.json();
            const imageUrl = result.url; // Ensure this is the correct field in your API response

            // Insert image into the editor at the current cursor position
            const range = quill.getSelection();
            if (range) {
              quill.insertEmbed(range.index, 'image', imageUrl);
              quill.setSelection(range.index + 1); // Move cursor to the next position
            }
          } catch (error) {
            console.error('Image upload failed:', error);
          }
        }
      };
    });
  }, []); // Run once when the component mounts

  // Function to handle sending the content to an API URL
  const handleSendText = async () => {
    if (!quillInstanceRef.current) return;

    // Get the editor's contents as HTML
    const content = quillInstanceRef.current.root.innerHTML;

    try {
      const response = await fetch('/api/submit-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error('Failed to send text to API');
      }

      const result = await response.json();
      console.log('Response from server:', result);
      alert('Text submitted successfully');
    } catch (error) {
      console.error('Error sending text:', error);
      alert('Failed to submit text');
    }
  };

  return (
    <div>
      <header className='bg-slate-900'>
        <Nav />
      </header>
      <div ref={editorRef} className="mt-4 border border-gray-300 rounded-md shadow-md h-screen" style={{ height: '500px' }}></div>
      <button
        onClick={handleSendText}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Update blog
      </button>
      <Footer />
    </div>
  );
};

export default BlogEditor;
