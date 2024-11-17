import React, { useState } from "react";

const predefinedTags = ["event", "environment", "welfare", "health", "youth"];

const TagInput = ({ editBlog, setEditBlog }: { editBlog: any; setEditBlog: (value: any) => void }) => {
  const [tagInput, setTagInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleAddTag = (tag: string) => {
    if (tag && !editBlog.tags?.includes(tag)) {
      setEditBlog({
        ...editBlog,
        tags: [...(editBlog.tags || []), tag],
      });
    }
    setTagInput(""); // Clear input
    setFilteredSuggestions([]); // Clear suggestions
  };

  const handleRemoveTag = (tag: string) => {
    const updatedTags = editBlog.tags.filter((t: string) => t !== tag);
    setEditBlog({ ...editBlog, tags: updatedTags });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTagInput(value);

    // Filter suggestions based on input
    if (value) {
      const suggestions = predefinedTags.filter((tag) =>
        tag.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Tags:</label>
      <div className="border border-gray-300 p-2 rounded-md flex flex-wrap gap-2">
        {editBlog.tags?.map((tag: string, index: number) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={() => handleRemoveTag(tag)}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-grow border-none focus:outline-none"
          placeholder="Type and press Enter to add tags"
          value={tagInput}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddTag(tagInput.trim());
            }
          }}
        />
      </div>
      {/* Render suggestions */}
      {filteredSuggestions.length > 0 && (
        <ul className="border border-gray-300 mt-2 rounded-md bg-white shadow-md max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleAddTag(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagInput;
