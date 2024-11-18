import axios from 'axios';
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { FaCalendar, FaEye, FaEdit } from 'react-icons/fa'

const BlogPost = ({ blog }: { blog: any }) => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('/api/blog/user')
            console.log(response.data)
            if (response.status == 200) setPosts(response.data)
        }

        fetchPosts()
    }, [])

    return (
        <>
            {/* BLOG POST MOBILE AND DESKTOP */}
            < div
                className="w-full h-70% flex md:flex-col sm:flex-col bg-white justify-evenly overflow-y-scroll "
                ref={blog}
            >
                <div
                    className="w-full"
                    style={{
                        height: `calc(${blog.current?.style.height} * ${posts.length + 1
                            })`,
                    }}
                >
                    {posts?.map((post, id) => (
                        <div
                            className="flex sm:flex-col md:flex-col items-center justify-evenly h-auto md:h-[500px] sm:h-[500px] mx-auto lg:w-[80%] space-x-3 md:w-[500px]"
                            key={id}
                        >
                            {/* {post.img && <div className="lg:w-[50%] w-full h-[150px] overflow-hidden">
                                <img src={post.img} alt={post.title} className="" />
                            </div>} */}
                            <div>
                                <div className="flex items-center justify-between w-full sm:space-x-10 lg:space-x-20 sm:text-sm">
                                    {/* {post.tags?.map((tag: string, index: number) => (
                                        <div key={index} className="event bg-blue-800 rounded-md w-28 h-8 px-4 text-white flex items-center justify-center">
                                            {tag}
                                        </div>
                                    ))} */}
                                    <div className="event bg-blue-800 rounded-md w-28 h-8 px-4 text-white flex items-center justify-center">
                                        {post.tags[0]}
                                    </div>
                                    <p>
                                        <FaEye className="inline-block text-[#07a034]" />{" "}
                                        {post.views} views
                                    </p>
                                    <p>
                                        <FaCalendar className="inline-block text-[#07a034]" />{" "}
                                        {new Date(post.createdAt).toLocaleString()}
                                    </p>
                                    <p className="text-white bg-[#07a034] sm:hidden md:hidden w-[150px] text-center rounded-xl">
                                        <FaEdit className="inline-block" /> Edit post
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold text-xl">{post.title}</h1>
                                    <p className="text-sm py-4">
                                        {post.metaDescription}{" "}
                                        <Link href="#" className="text-[#07a034]">
                                            see more &rarr;
                                        </Link>
                                    </p>
                                </div>
                                <Link href={`/blog`} className="text-white bg-[#07a034] lg:hidden w-[150px] text-center p-2">
                                    <FaEdit className="inline-block" /> Edit post
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}

export default BlogPost
