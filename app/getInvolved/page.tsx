import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function GetInvoved() {
  return (
    <div className="">
      <header className="bg-slate-900">
        <Nav />
      </header>
      <main>
        <h1 className="text-4xl text-center w-[500px] mx-auto my-8 font-gobold">
          Join us and make a <span className="text-slate-700 flex flex-col items-center">  difference <div className="w-[180px] h-[5px] bg-[#07a034]"></div></span>
        </h1>
        <p className="w-[650px] text-center mx-auto my-[50px]">every contribution you make helps us fund critical programs that changes lifes and create lasting impact on those who needs it the most.</p>

        <div className=" w-[790px] mx-auto h-auto flex items-center justify-evenly ">
          <div className="w-[33%]">
            <img src="/slider.jpg" alt="" className="w-full h-[250px] rounded-t-xl"/>
            <div className="w-[50%] rounded-full flex items-center justify-center text-4xl">
              01.
            </div>
            <div className="">
              <p></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
