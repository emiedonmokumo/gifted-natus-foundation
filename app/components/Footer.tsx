export default function Footer() {
  return (
    <div className=" bg-[url('/footerBackground.png')] w-screen h-[500px] pt-0 flex justify-evenly items-center flex-col relative">
      <div className="flex items-center justify-evenly flex-col">
        <img src="/logo.png" alt=" " className="h-auto w-[6rem]" />
        <p className="text-white">Gifted natus Foundation</p>
      </div>
      <div className=" flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl lg:text-3xl text-left text-white font-gobold font-bold w-[60%]">
          VISIT US
        </h1>
        <div className="flex items-center justify-evenly">
          <img src="/Location.png" alt=" location image" className="w-[20px] h-[20px]" />{" "}
          <p className="text-white w-[80%]">No 2, old Assembly Quarters,Ekeki Housing Estate, Yenagoa, Bayelsa state Nigeria</p>
        </div>
      </div>
      <div className="flex items-start justify-evenly absolute bottom-5 left-5">
        <img src="/phone.png" alt="" className="w-5 h-5"/>
        <p className="text-white">+2348162473903</p>
      </div>
    </div>
  );
}
