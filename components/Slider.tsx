import { FaCalendar, FaEye } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  img: string;
  title: string;
  createAt: Date;
  views: string;
  _id: string;
  shortText: string;
  category: string;
}

const Slider = () => {
  const [latestPost, setLatestPost] = useState<Post[] | null>(null);

  useEffect(() => {
    async function receivePost() {
      try {
        const blogPostFetch = await fetch("/api/blog");
        if (blogPostFetch.status === 200) {
          const posts: Post[] = await blogPostFetch.json();
          // Sort posts by date using `Intl.Collator` for locale-aware comparison
          const collator = new Intl.Collator(undefined, { numeric: true });
          const sortedPosts = posts
            .sort((a: any, b: any) => collator.compare(b.createdAt, a.createdAt))
            .slice(0, 5); // Only take the top 5 posts
          setLatestPost(sortedPosts);
        }
      } catch (error) {
        console.log(`There was an error: ${error}`);
      }
    }

    receivePost();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10" id="blog">
      {/* Slider Container */}
      <div className="flex overflow-x-scroll space-x-4 lg:w-[80%] mx-auto no-scrollbar">
        {/* Display Latest Posts */}
        {latestPost &&
          latestPost.map((post) => (
            <div
              className="max-w-[300px] bg-gray-900 text-white p-5 rounded-lg flex-shrink-0"
              key={post._id}
            >
              <img
                className="rounded-lg w-full h-40 object-cover"
                src={post.img}
                alt={post.title}
              />
              <Link href={`/blog/${post._id}`} className="mt-4 text-lg font-bold">
                {post.title}
              </Link>
              <div className="flex justify-between items-center text-sm mt-4">
                <span>
                  {post.views} views <FaEye className="text-[#07a034] text-1xl inline-block" />
                </span>
                <span>
                  <FaCalendar className="text-[#07a034] text-1xl inline-block" />{" "}
                  {post.createAt && <span>{new Date(post.createAt).toLocaleDateString()}</span>}
                </span>
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
