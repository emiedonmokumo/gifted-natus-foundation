import Link from 'next/link';
import { FaCalendar, FaEye } from 'react-icons/fa'

interface Post {
    img: string;
    title: string;
    day: string;
    veiws: string;
    id: number;
    shortText: string;
    category: string;
  }

  
  const posts: Post[] = [
    {
      img: "/post1.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Events",
      id: 1,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam",
    },
    {
      img: "/post2.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Health",
      id: 2,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam",
    },
    {
      img: "/post3.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Environment",
      id: 3,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam ",
    },
    {
      img: "/post4.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Youth",
      id: 4,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam",
    },
    {
      img: "/post1.jpg",
      title: "Lorem ipsum dolor, sit amet consectetur.",
      day: "3 days ago",
      veiws: "3k",
      category: "Welfare",
      id: 5,
      shortText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam ",
    },
    // More posts...
  ];


export default function RelatedPost(){
    return(
        <div className="overflow-x-scroll h-[500px] ">
            <div className=" flex ">
            {posts.map((post, id) => (
          <div
            className="flex flex-col items-center justify-evenly overflow-hidden sm:h-[500px] h-[400px] sm:w-[300px] md:mx-auto sm:mx-auto lg:w-[360px] md:w-[500px]"
            key={id}
          >
           <div className="w-full h-[150px] overflow-hidden">
           <img src={post.img} alt={post.title} className="" />
           </div>
            <div>
              <div className="flex items-center justify-between w-full sm:space-x-10 lg:space-x-20">
                <div className="event bg-blue-800 rounded-md w-28 h-8 text-white flex items-center justify-center">
                  {post.category}
                </div>
                <p><FaEye className="inline-block text-[#07a034]" /> {post.veiws} views</p>
                <p><FaCalendar className="inline-block text-[#07a034]" /> {post.day}</p>
              </div>
              <div className="">
                <h1 className="font-gobold text-4xl">{post.title}</h1>
                <p>{post.shortText} <Link href="#" className="text-[#07a034]">see more &rarr;</Link></p>
              </div>
            </div>
          </div>
        ))}
            </div>
        </div>
    )
}