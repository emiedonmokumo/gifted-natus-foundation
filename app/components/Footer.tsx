import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="pt-40 pb-12 bg-[url('/footerBackground.png')] flex justify-evenly items-center flex-col lg:flex-row" id="contact">
      <div className="flex items-center justify-evenly flex-col">
        <img src="/logo.png" alt=" " className="h-auto w-[6rem]" />
        <p className="text-white">Gifted natus Foundation</p>
      </div>
      <div>
        <div className="flex flex-col">
          <h1 className="text-3xl mb-5 sm:pl-20 lg:text-3xl text-white font-gobold">
            VISIT US
          </h1>
        </div>
        <div className="flex flex-col space-y-2 ">
          <div className="flex space-x-8">
            <FaLocationDot className="text-green-400 text-2xl"/>
            <p className="text-white">
              No 2, old Assembly Quarters,Ekeki Housing Estate, Yenagoa, Bayelsa
              state Nigeria
            </p>
          </div>
          <div className="flex space-x-8">
            <FaPhone className="text-xl text-green-500" />
            <p className="text-white text-left">+2348162473903</p>
          </div>
          <div className="flex space-x-8">
            <FaEnvelope className="text-green-400 text-xl" />
            <p className="text-white text-left">
              info@giftednatusfoundation.Org
            </p>
          </div>
        </div>
        <div className="flex items-center justify-evenly mt-5">
          <Link href="#">
            <img src="/facebook.png" alt="" />
          </Link>
          <Link href="#">
            <img src="/x.png" alt="" />
          </Link>
          <Link href="#">
            <img src="/instggram.png" alt="" />
          </Link>
          <Link href="#">
            <img src="/WA.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
