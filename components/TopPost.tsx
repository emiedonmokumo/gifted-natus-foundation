"use client";
import { useEffect, useState } from "react";
import { FaCalendar, FaEye } from "react-icons/fa6";
import Link from "next/link";

interface Post {
  img: string;
  title: string;
  day: string;
  views: number;
  _id: string;
  description: string;
  shortText: string;
  tags: string[];
  slug: string;
}

export default function TopPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function recievePost() {
      try {
        const blogPostFetch = await fetch("/api/blog");
        if (blogPostFetch.status == 200) {
          const data: Post[] = await blogPostFetch.json();
          setPosts(data);

          // Calculate the average views
          const averageViews =
            data.reduce((sum, post) => sum + post.views, 0) / data.length;

          // Filter posts with views above average
          const aboveAveragePosts = data.filter((post) => post.views > averageViews);
          setFilteredPosts(aboveAveragePosts);
        }
      } catch (error) {
        console.log(`There was an error: ${error}`);
      }
    }

    recievePost();
  }, []);

  return (
    <div className="overflow-scroll h-[500px] w-screen flex items-center mt-[80px]">
      {/* Top post slider track */}
      {filteredPosts && (
        <div
          className={`w-[calc(30vw * ${
            filteredPosts.length + 1
          })] h-[80%] flex items-center space-x-5`}
        >
          {filteredPosts.map((post) => (
            <div
              key={post._id}
              className="slide h-full w-[40vw] sm:w-[80vw] relative rounded-2xl pt-[70px] pl-[10px]"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${post.img})`,
                backgroundSize: "cover",
              }}
            >
              <div className="event bg-blue-800 absolute rounded-md top-8 left-3 w-32 h-8 text-white flex items-center justify-center">
                {post.tags[0]}
              </div>
              <div className="text-white">
                <h1 className="text-4xl mb-10 font-gobold w-[90%] h-[20%] overflow-y-hidden">
                  {post.title}
                </h1>
                <p className="sm:hidden md:hidden overflow-y-hidden w-[95%] h-[70%]">
                  {post.description}{" "}
                  <Link href={`/blog/${post.slug}`} className="text-[#07a034]">
                    see more &rarr;
                  </Link>
                </p>
                <div className="flex items-center justify-evenly lg:hidden">
                  <p>
                    <FaEye className="inline-block text-[#07a034]" /> {post.views}{" "}
                    views
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-[#07a034]">
                    see more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
