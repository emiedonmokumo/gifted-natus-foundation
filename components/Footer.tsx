"use client"
import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import {useRef, useEffect} from "react"
export default function Footer() {
  //Animation code
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((element) => {
          if (element.isIntersecting) {
            element.target.classList.add("in-view");
          } else {
            element.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToObserve = [
      footerRef.current,
    ]; // Add more elements as needed

    elementsToObserve.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element);
       }
      });
    };
  }, []);


  return (
    <footer className="lg:pt-52 lg:pb-12 sm:pt-10 sm:pb-5 md:pt-20 md:pb-8 bg-[rgb(16,23,54)] flex-col lg:flex-row" id="contact" ref={footerRef}>
      <h1 className="text-3xl lg:my-5 sm:mb-5 lg:text-3xl text-center text-white font-gobold opacity-0 translate-x-[-100px]">
        VISIT US
      </h1>
      <div className="flex md:flex-col sm:flex-col space-x-5 items-center sm:text-sm">
        <div className="flex items-center justify-evenly flex-col md:my-8 w-60">
          <img src="/logo.png" alt=" " className="h-auto w-[6rem]" />
          <p className="text-white opacity-0 translate-x-[-100px]">Gifted Natus Foundation</p>
        </div>
        <div className="flex flex-col md:mb-10 space-y-2 sm:space-y-5 md:space-y-5 sm:px-5 md:px-10 sm:py-10">
          <div className="flex space-x-8">
            <FaLocationDot className="text-green-400 sm:text-4xl text-xl" />
            <p className="text-white opacity-0 translate-x-[-100px]">
              No 2, Old Assembly Quarters, Ekeki Housing Estate, Yenagoa, Bayelsa
              State, Nigeria. 
            </p>
          </div>
          <div className="flex space-x-8">
            <FaPhone className="text-xl text-green-500" />
            <p className="text-white text-left opacity-0 translate-x-[-100px]">+2349056572025</p>
          </div>
          <div className="flex space-x-8">
            <FaEnvelope className="text-green-400 text-xl" />
            <p className="text-white text-left opacity-0 translate-x-[-100px]">
              info@giftednatusfoundation.org
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 mt-5">
        <Link href="https://www.facebook.com/profile.php?id=100076144086383&mibextid=LQQJ4d">
          <img className="w-8" src="/facebook.png" alt="" />
        </Link>
        <Link href="https://x.com/giftednatusfdn?s=11">
          <img className="w-8" src="/tweeter.png" alt="" />
        </Link>
        <Link href="https://www.instagram.com/giftednatusfdn?igsh=OGQ5ZDc2ODk2ZA==">
          <img className="w-8" src="/instggram.png" alt="" />
        </Link>
        <Link href="https://wa.link/lyrgtz">
          <img className="w-8" src="/WA.png" alt="" />
        </Link>
      </div>
    </footer>
  );
}
