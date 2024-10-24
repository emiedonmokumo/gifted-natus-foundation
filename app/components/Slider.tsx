// export default function Slider(){

//     return(
//         <div className="bg-blue-900 py-16 relative h-80">
//         <div className="flex justify-between items-center space-x-5 px-12 absolute -top-12">
//             <div className="bg-[url('/slider.jpg')] bg-cover p-32 rounded-xl relative" id="">
//                 <div>
//                     post 1
//                 </div>
//             </div>
//         </div>
//         <div className="flex justify-between items-center space-x-5 px-12 absolute -top-12">
//             <div className="bg-[url('/slider.jpg')] bg-cover p-32 rounded-xl relative" id="">
//                 <div>
//                     post 2
//                 </div>
//             </div>
//         </div>
//         <div className="flex justify-between items-center space-x-5 px-12 absolute -top-12">
//             <div className="bg-[url('/slider.jpg')] bg-cover p-32 rounded-xl relative" id="">
//                 <div>
//                     post 3
//                 </div>
//             </div>
//         </div>
//         <div className="flex justify-between items-center space-x-5 px-12 absolute -top-12">
//             <div className="bg-[url('/slider.jpg')] bg-cover p-32 rounded-xl relative" id="">
//                 <div>
//                     post 4
//                 </div>
//             </div>
//         </div>
//         <div className="flex justify-between items-center space-x-5 px-12 absolute -top-12">
//             <div className="bg-[url('/slider.jpg')] bg-cover p-32 rounded-xl relative" id="">
//                 <div>
//                     post 5
//                 </div>
//             </div>
//         </div>
//         <div className="flex justify-between items-center space-x-5 px-12 absolute -top-12">
//             <div className="bg-[url('/slider.jpg')] bg-cover p-32 rounded-xl relative" id="">
//                 <div>
//                     post 1
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }


import { title } from 'process';
import React from 'react';

const Slider = () => {

    var post:any[] = [
        {
            img:"/slider.jpg",
            title: "post 1",
            views: "3k",
            posted: "2 days ago"
        },
        {
            img:"/slider1.jpg",
            title: "post 2",
            views: "3k",
            posted: "2 days ago"
        },
        {
            img:"/slider2.jpg",
            title: "post 3",
            views: "3k",
            posted: "2 days ago"
        },
        {
            img:"/slider3.jpg",
            title: "post 3",
            views: "3k",
            posted: "2 days ago"
        },
        {
            img:"/slider4.jpg",
            title: "post 4",
            views: "3k",
            posted: "2 days ago"
        }
    ]
    
  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Slider Container */}
      <div className="flex overflow-x-scroll space-x-4 no-scrollbar">
        {/* Card 1 */}
        {post.map((article, index)=>(
            
        <div className="min-w-[300px] bg-gray-900 text-white p-5 rounded-lg flex-shrink-0">
        <img
          className="rounded-lg w-full h-40 object-cover"
          src={article.img}
          alt={article.title}
        />
        <h3 className="mt-4 text-lg font-bold">{article.title}</h3>
        <div className="flex justify-between items-center text-sm mt-4">
          <span>{article.views} views</span>
          <span>{article.posted}</span>
        </div>
      </div>
        ))}
        </div>
        {/* See All */}
      <div className="mt-8 text-center">
        <a href="/" className="text-lg text-green-500 font-semibold hover:underline">
          See all →
        </a>
      </div>
    </div>
  );
};

export default Slider;
