import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="lg:pt-52 lg:pb-12 sm:pt-10 sm:pb-5 md:pt-20 md:pb-8 bg-black flex-col lg:flex-row" id="contact">
      <h1 className="text-3xl lg:my-5 sm:mb-5 lg:text-3xl text-center text-white font-gobold">
        VISIT US
      </h1>
      <div className="flex md:flex-col sm:flex-col space-x-5 items-center sm:text-sm">
        <div className="flex items-center justify-evenly flex-col md:my-8 w-60">
          <img src="/logo.png" alt=" " className="h-auto w-[6rem]" />
          <p className="text-white">Gifted Natus Foundation</p>
        </div>
        <div className="flex flex-col md:mb-10 space-y-2 sm:space-y-5 md:space-y-5 sm:px-5 md:px-10 sm:py-10">
          <div className="flex space-x-8">
            <FaLocationDot className="text-green-400 sm:text-4xl text-xl" />
            <p className="text-white">
              No 2, Old Assembly Quarters,Ekeki Housing Estate, Yenagoa, Bayelsa
              State, Nigeria. 
            </p>
          </div>
          <div className="flex space-x-8">
            <FaPhone className="text-xl text-green-500" />
            <p className="text-white text-left">+2349056572025</p>
          </div>
          <div className="flex space-x-8">
            <FaEnvelope className="text-green-400 text-xl" />
            <p className="text-white text-left">
              info@giftednatusfoundation.org
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 mt-5">
        <Link href="#">
          <img className="w-8" src="/facebook.png" alt="" />
        </Link>
        <Link href="#">
          <img className="w-8" src="/tweeter.png" alt="" />
        </Link>
        <Link href="#">
          <img className="w-8" src="/instggram.png" alt="" />
        </Link>
        <Link href="#">
          <img className="w-8" src="/WA.png" alt="" />
        </Link>
      </div>
    </footer>
  );
}
