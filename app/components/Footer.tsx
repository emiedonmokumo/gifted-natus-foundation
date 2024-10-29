import Link from "next/link";
export default function Footer() {
  return (
    <div className=" bg-[url('/footerBackground.png')] w-screen h-[500px] pt-0 flex justify-evenly items-center flex-col lg:flex-roe">
      <div className="flex items-center justify-evenly flex-col">
        <img src="/logo.png" alt=" " className="h-auto w-[6rem]" />
        <p className="text-white">Gifted natus Foundation</p>
      </div>
      <div>
        <div className=" flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl lg:text-3xl text-left text-white font-gobold font-bold w-[80%]">
            VISIT US
          </h1>
          <div className="flex w-[80%] mx-auto">
            <img
              src="/Location.png"
              alt=" location image"
              className="w-[20px] h-[20px]"
            />{" "}
            <p className="text-white w-[80%]">
              No 2, old Assembly Quarters,Ekeki Housing Estate, Yenagoa, Bayelsa
              state Nigeria
            </p>
          </div>
        </div>
        <div className="flex w-[80%] mx-auto">
          <img src="/phone.png" alt="" className="w-5 h-5" />
          <p className="text-white text-left">+2348162473903</p>
        </div>
        <div className="flex w-[80%] mx-auto">
          <img src="/Email.png" alt="" className="w-5 h-5" />
          <p className="text-white text-left">info@giftednatusfoundation.Org</p>
        </div>
        <div className="flex items-center justify-evenly">
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
