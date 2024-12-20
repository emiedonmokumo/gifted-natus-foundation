"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import BlogLink from "./BlogLink";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<any>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check for the authenticated User
  const { data: session } = useSession();
  // console.log(session?.user)

  return (
    <div>
      <nav className=" nav w-0 h-screen overflow-hidden z-50 lg:w-full md:w-full md:h-28 lg:h-28 flex items-center justify-evenly bg-[rgb(16,23,54)] md:justify-between lg:justify-between nav md:bg-transparent lg:bg-transparent flex-col md:flex-row lg:flex-row fixed top-0 left-0" style={{backgroundColor: "rgb(16,23,54)"}}>
        <img
          src="/close.png"
          alt=""
          className=" absolute top-1 right-2 lg:hidden md:hidden"
        />
        <Link href={"/"}>
          <div className="w-52 flex items-center justify-evenly">
            <img src="/logo.png" alt="logo" className="w-9" />
            <p className="text-white">
              Gifted Natus
              <br /> Foundation
            </p>
          </div>
        </Link>
        <div className=" text-white w-full h2 flex-col md:flex-row lg:flex-row  md:w-[80%] lg:w-[70%] md:h-auto lg:h-auto  flex  items-center  justify-evenly md:items-center md:jusify-evenly lg:justify-evenly">
          {session && pathname === "/dashboard" ? (
            <>
              <BlogLink />
              <Link className="font-medium" href="/#about">
                Profile
              </Link>
              {/* <Link className="font-medium" href="/#contact">
                
              </Link> */}
              <Link className="font-medium" href="/blog">
                Subscribers
              </Link>
              <button
                className="font-medium text-green-300"
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="font-medium" href="/aboutus">
                About us
              </Link>
              <Link className="font-medium" href="/programs-and-initiatives">
                Programs & Initiatives
              </Link>
              <Link className="font-medium" href="/blog">
                Blog
              </Link>
              <Link className="font-medium" href="/#contact">
                Contact Us
              </Link>
              <Link className="font-medium text-green-300" href="/getInvolved">
                Get Involved &rarr;
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="sm:pl-5 md:pl-5 lg:hidden flex pt-4 sm:px-5 md:px-5 pb-8 w-full bg-[rgb(16,23,54)] z-50 items-center justify-between fixed top-0 left-0">
        <Link href={"/"}>
          {" "}
          <img src="/logo.png" alt="logo" className="w-9" />
        </Link>
        <button onClick={toggleMenu}>
          <img src="/menu.png" alt="menu" className="" />
        </button>
      </div>

      {/* White Background Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black z-40"
          onClick={toggleMenu} // Close menu on overlay click
        ></div>
      )}

      {/* Nav Items */}
      <nav
        className={`nav fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#0d1c38] text-white z-50 transition-transform duration-300 transform ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src="/close.png"
          alt="close"
          className="absolute top-4 right-4 cursor-pointer"
          onClick={toggleMenu} // Close menu on close button click
        />
        <Link href={"/"}>
          <div className="w-52 flex flex-col items-center justify-center mb-4 space-y-3">
            <img src="/logo.png" alt="logo" className="w-9" />
            <p className="text-white text-center">Gifted Natus Foundation</p>
          </div>
        </Link>
        {session && pathname === "/dashboard" || pathname === "/blog/new" ? (
          <>
            <BlogLink />
            <Link className="font-medium" href="/#about">
              Profile
            </Link>
            {/* <Link className="font-medium" href="/#contact">
                
              </Link> */}
            <Link className="font-medium" href="/blog">
              Subscribers
            </Link>
            <button
              className="font-medium text-green-300"
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
            >
              Logout
            </button>
          </>
        ) : (
          <div className="text-white flex flex-col items-center h-[30vh] justify-between">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Link
                className="font-medium py-2 hover:text-green-500"
                href="/aboutus"
              >
                {" "}
                About Us
              </Link>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Link
                className="font-medium py-2 hover:text-green-500"
                href="/programs-and-initiatives"
              >
                {" "}
                Programs & Initiatives
              </Link>
            </button>
            
            <button onClick={() => setIsOpen(!isOpen)}>
              <Link
                className="font-medium py-2 hover:text-green-500"
                href="/blog"
              >
                Blog
              </Link>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Link
                className="font-medium py-2 hover:text-green-500"
                href="#contact"
              >
                Contact Us
              </Link>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Link
                className="font-medium py-2 hover:text-green-500"
                href="/getInvolved"
              >
                Get Involved &rarr;
              </Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

// export default function Nav() {

//   return (
//     <>
//       <div className="sm:pl-5 md:hidden lg:hidden flex pt-4 sm:px-5 pb-8 items-center justify-between">
//         <img src="/logo.png" alt="logo" className="w-9" />
//         <button onClick={menuOpen}><img src="/menu.png" alt="" className="" /></button>
//       </div>
//       <nav className=" nav w-0 h-screen overflow-hidden z-50 lg:w-full md:w-full md:h-28 lg:h-28 flex items-center justify-evenly md:justify-between lg:justify-between nav md:bg-transparent lg:bg-transparent flex-col md:flex-row lg:flex-row fixed top-0 left-0 md:static lg:static ">
//         <img src="/close.png" alt="" className=" absolute top-1 right-2 lg:hidden md:hidden"/>
//         <div className="w-52 flex items-center justify-evenly">
//           <img src="/logo.png" alt="logo" className="w-9" />
//           <p className="text-white">
//             Gifted Natus
//             <br /> foundation
//           </p>
//         </div>
//         <div className=" text-white w-full h2 flex-col md:flex-row lg:flex-row  md:w-6/12 lg:w-2/4 md:h-auto lg:h-auto  flex  items-center  justify-evenly md:items-center md:jusify-evenly lg:justify-evenly">
//           <Link className="font-medium" href="#about">About us</Link>
//           <Link className="font-medium" href="#contact">Contact Us</Link>
//           <Link className="font-medium" href="#blog">Blog</Link>
