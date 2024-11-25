'use client'
import React, { useState } from 'react';

const BlogLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className=" z-20 text-left">
      {/* Main Link */}
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        Blog
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5"
          onMouseLeave={closeDropdown}
        >
          <ul className="py-1 text-gray-700">
            {/* {items.map((item, index) => ( */}
              <li>
                <a
                  href={'/blog/new'}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Blogs new
                </a>
              </li>
            {/* ))} */}
          </ul>
        </div>
      )}
    </div>
  );
};
  

export default BlogLink;
