import React, { useState } from "react";

const ImageUploadForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload blog Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {previewUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Preview:</p>
          <img src={previewUrl} alt="Selected Preview" className="w-full h-auto rounded-md border" />
        </div>
      )}

      {!previewUrl && (
        <p className="text-gray-500 text-sm mt-2">No image selected.</p>
      )}
    </div>
  );
};

export default ImageUploadForm;
