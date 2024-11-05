import { FaCalendar, FaEye } from "react-icons/fa6";

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
    <div className="max-w-6xl mx-auto py-10" id="blog">
      {/* Slider Container */}
      <div className="flex overflow-x-scroll space-x-4 no-scrollbar">
        {/* Card 1 */}
        {post.map((article, index)=>(
            
        <div className="min-w-[300px] bg-gray-900 text-white p-5 rounded-lg flex-shrink-0" key={article.title+index}>
        <img
          className="rounded-lg w-full h-40 object-cover"
          src={article.img}
          alt={article.title}
        />
        <h3 className="mt-4 text-lg font-bold">{article.title}</h3>
        <div className="flex justify-between items-center text-sm mt-4">
          <span>{article.views}  views <FaEye className="text-[#07a034] text-1xl inline-block"/></span>
          <span> <FaCalendar className="text-[#07a034] text-1xl inline-block"/> {article.posted}</span>
        </div>
      </div>
        ))}
        </div>
        {/* See All */}
      <div className="mt-8 text-center">
        <a href="/blog" className="text-lg text-green-500 font-semibold hover:underline">
          See all →
        </a>
      </div>
    </div>
  );
};

export default Slider;
