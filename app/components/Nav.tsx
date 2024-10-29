"use client"
import Link from "next/link";

export default function Nav() {
 
  function menuOpen (){
    document.getElementsByClassName("nav")[0].style.width = "100%"
  }
  function menuClose (){
    document.getElementsByClassName("nav")[0].style.width = "0"
  }

  

  return (
    <>
      <div className=" md:hidden lg:hidden flex w-full h-32 items-center justify-evenly">
        <img src="/menu.png" alt="" className="" onClick={menuOpen} />
        <div className="w-52 flex items-center justify-evenly">
          <img src="/logo.png" alt="logo" className="w-9" />
          <p className="text-white">
            Gifted Natus
            <br /> foundation
          </p>
        </div>
        <div className="h-full w-24"></div>
      </div>
      <nav className=" nav w-0 h-screen overflow-hidden z-50 lg:w-full md:w-full md:h-28 lg:h-28 flex items-center justify-evenly md:justify-between lg:justify-between nav md:bg-transparent lg:bg-transparent flex-col md:flex-row lg:flex-row fixed top-0 left-0 md:static lg:static ">
        <img src="/close.png" alt="" className=" absolute top-1 right-2 lg:hidden md:hidden" onClick={menuClose}/>
        <div className="w-52 flex items-center justify-evenly">
          <img src="/logo.png" alt="logo" className="w-9" />
          <p className="text-white">
            Gifted Natus
            <br /> foundation
          </p>
        </div>
        <div className=" text-white w-full h2 flex-col md:flex-row lg:flex-row  md:w-6/12 lg:w-2/4 md:h-auto lg:h-auto  flex  items-center  justify-evenly md:items-center md:jusify-evenly lg:justify-evenly">
          <Link href="#about">About us</Link>
          <Link href="#contact">Contact Us</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#donate" className="green-text">
            donate &rarr;
          </Link>
        </div>
      </nav>
    </>
  );
}
