// BlogEditor.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import Loader from './Loader';

type HandlerFunction = (value: any) => void;

interface MyCustomModule {
  addHandler: (eventName: string, handler: HandlerFunction) => void;
}

const BlogEditor= ({id}:{id:(string | null)}) => {
  const blog = {
    title:"lorem",
    id: 33,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident at explicabo unde beatae rerum odio vel necessitatibus omnis praesentium expedita quos, ad, laudantium doloremque voluptate, ullam magnam dicta. Ipsa consequatur, vel minus assumenda accusamus pariatur molestias dolorem quis voluptate sed et illum, quam error? Non deserunt debitis tenetur labore, veritatis magnam, iste fugiat harum velit quidem ullam, soluta sed id voluptate consequatur repudiandae facere vel aliquam earum officiis? Pariatur debitis nesciunt cupiditate aliquam, non itaque animi similique recusandae veniam, quos tempora! Consequatur corporis exercitationem quibusdam expedita iste. Et laudantium optio dolor facilis debitis atque reprehenderit totam ipsum itaque, vel unde tenetur esse consectetur, nostrum aspernatur neque temporibus minima eum voluptatibus repellendus perferendis facere ullam maiores ab! Est quibusdam doloremque reiciendis quas molestiae possimus eius commodi odit dignissimos quis, suscipit laborum repellat optio? Fugit veritatis error nostrum dicta. Modi perspiciatis numquam debitis tempora magnam aut minima neque ratione consequatur fugit quibusdam facilis totam recusandae pariatur nobis in vero ad quod nam eius, hic corporis dignissimos! Ratione, architecto velit reprehenderit esse nobis labore quia maiores. Neque odit quae maxime aliquid, dolores repellendus quam? Assumenda veritatis ratione nesciunt expedita neque nemo autem illo, asperiores alias minus magnam eaque perferendis quo, facere modi tenetur ad, culpa iure doloremque? Hic quam possimus dolores maiores vitae itaque, amet voluptates pariatur nemo aperiam sapiente cumque corrupti asperiores aliquam numquam, at cupiditate est et accusantium eos explicabo animi laboriosam. Harum modi placeat laboriosam nemo voluptate facilis vero sapiente esse neque. Dolorem sequi fugiat ea quos maiores tempore, facilis reiciendis. Amet magnam deserunt, nisi dicta sunt sint dolore quod doloremque sed? Impedit pariatur maiores reprehenderit facere est eius consequatur omnis recusandae odio quibusdam. Totam et laborum aliquid temporibus! Error blanditiis commodi, laboriosam doloremque illum repellendus temporibus quis, cum, quibusdam ea dolorem itaque. Dignissimos eaque quasi sequi saepe tempore."
  }

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
    if(!id ){}else{
      quill.insertText(0,blog.text)
    }
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
