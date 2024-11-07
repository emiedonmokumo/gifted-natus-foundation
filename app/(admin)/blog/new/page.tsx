'use client'
import React, { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import axios from 'axios';

function MyComponent() {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      console.log(values); // Handle form submission
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  const quillRef = useRef<any>(null);  // Ref to store the Quill instance

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: ['right', 'center', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ],
  };

  // Custom image handler for Quill editor
  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('image', file);

        try {
          setIsUploading(true);
          const response = await axios.post('/api/upload/image', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          if (response.status === 200) {
            const imageUrl = response.data.url; // assuming the response contains { url: 'image_url' }
            const quill = quillRef.current?.getEditor(); // Get the Quill editor instance
            const range = quill?.getSelection();
            quill?.insertEmbed(range?.index || 0, 'image', imageUrl);
          } else {
            console.error('Image upload failed:', response);
          }
        } catch (error) {
          console.error('Image upload error:', error);
        } finally {
          setIsUploading(false);
        }
      }
    };
  };

  // This is to set the image upload handler in Quill when the component mounts
  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    if (quill) {
      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('image', handleImageUpload);
    }
  }, []);

  const handleEditorChange = (value: string) => {
    formik.setFieldValue('message', value);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <ReactQuill
          ref={quillRef}
          modules={modules}
          value={formik.values.message}
          onChange={handleEditorChange}
          placeholder="Enter the message..........."
        />
        <button type="submit">Submit</button>
      </form>
      {isUploading && <p>Uploading...</p>}
    </div>
  );
}

export default MyComponent;
