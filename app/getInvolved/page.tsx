'use client'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FaRegCopy } from "react-icons/fa6";
import VolunteerForm from "@/components/VolunteerForm";

export default function GetInvoved() {
  return (
    <div className="">
      <header className="bg-slate-900">
        <Nav />
      </header>
      <main>
        <h1 className="text-4xl text-center lg:w-[500px] mx-auto my-8 font-gobold sm:text-2xl">
          Join us and make a{" "}
          <span className="text-slate-700 flex flex-col items-center">
            {" "}
            difference <div className="w-[180px] h-[5px] bg-[#07a034]"></div>
          </span>
        </h1>
        <p className="w-[650px] text-center mx-auto my-[50px] sm:hidden md:hidden">
          every contribution you make helps us fund critical programs that
          changes lifes and create lasting impact on those who needs it the
          most.
        </p>

        <div className=" mx-auto flex items-center justify-evenly sm:flex-col md:flex-col">
          <div className="relative w-[250px] h-[650px]">
            <img
              src="/involved1.png"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="w-[130px] h-[130px] rounded-full flex items-center justify-center text-4xl bg-white shadow-black shadow-2xl absolute top-[180px] left-[60px] z-30">
              <p>01.</p>
            </div>
            <div className="mt-20 space-y-6">
              <h1 className="text-3xl text-center mx-auto font-gobold w-[200px]">
                COMMUNITY DEVELOPMENT
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                id nisi quidem aliquid qui! Quibusdam unde eligendi perferendis
                voluptatem officiis corrupti molestias dolorum, officia cumque
                eveniet veniam debitis, maxime quae!
              </p>
            </div>
          </div>
          <div className="relative w-[250px] h-[650px]">
            <img
              src="/involved2.png"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="w-[130px] h-[130px] rounded-full flex items-center justify-center text-4xl bg-white shadow-black shadow-2xl absolute top-[180px] left-[60px] z-30">
              <p>02.</p>
            </div>
            <div className="mt-20 space-y-6">
              <h1 className="text-3xl text-center mx-auto font-gobold w-[200px]">
                HEALTH INTIATIVES
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                id nisi quidem aliquid qui! Quibusdam unde eligendi perferendis
                voluptatem officiis corrupti molestias dolorum, officia cumque
                eveniet veniam debitis, maxime quae!
              </p>
            </div>
          </div>
          <div className="relative w-[250px] h-[650px] ">
            <img
              src="/involved3.png"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="w-[130px] h-[130px] rounded-full flex items-center justify-center text-4xl bg-white shadow-black shadow-2xl absolute top-[180px] left-[60px] z-30">
              <p>03.</p>
            </div>
            <div className="mt-20 space-y-6">
              <h1 className="text-3xl text-center mx-auto flex flex-wrap font-gobold w-[200px]">
                EMERGENCY RELIEF
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                id nisi quidem aliquid qui! Quibusdam unde eligendi perferendis
                voluptatem officiis corrupti molestias dolorum, officia cumque
                eveniet veniam debitis, maxime quae!
              </p>
            </div>
          </div>
        </div>
        {/*donate section*/}
        <div className="relative h-[600px] mb-11 md:h-[900px] sm:h-[700px]">
          <img
            src="/background.png"
            alt=""
            className="absolute left-0 bottom-0 h-[60%] w-full  md:hidden sm:hidden"
          />
          <div className="bg-[#113152] text-white space-y-6 w-[400px] h-[100%] absolute top-0 right-[100px] md:w-full sm:w-full md:relative sm:relative md:right-0 sm:right-0 ">
            <h1 className="text-4xl text-center mt-8">
              Donate <span className="text-[#07a034]">Today</span>
            </h1>
            <p className="text-center">Your contribution makes a difference</p>
            <div className="">
              <div className="flex items-center justify-evenly">
                <img
                  src="/bank fcmb.png"
                  alt="fcmb bank logo"
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className=" flex items-center justify-between flex-col h-[60px] w-[40%]">
                  <h1 className="text-md">Acc. No: 0000048493</h1>
                  <p className="text-xs">Acc. Name: Gifted natus foundation</p>
                </div>
                <FaRegCopy className="text-xl"  onClick={() => window.navigator.clipboard.writeText("Account Numebr: 0000048493, Account Name: Gifted Natus Foundation")}/>
              </div>
              <div className="h-[1px] bg-gray-400 w-[60%] mx-auto my-7"></div>
              <div className="flex items-center justify-evenly">
                <img
                  src="/bank wema.png"
                  alt="fcmb bank logo"
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className=" flex items-center justify-between flex-col h-[60px] w-[40%]">
                  <h1 className="text-md">Acc. No: 0000048493</h1>
                  <p className="text-xs">Acc. Name: Gifted natus foundation</p>
                </div>
                <FaRegCopy className="text-xl" onClick={() => window.navigator.clipboard.writeText("Account Numebr: 0000048493, Account Name: Gifted Natus Foundation")}/>
              </div>
              <div className="h-[1px] bg-gray-400 w-[60%] mx-auto my-7"></div>
              <div className="flex items-center justify-evenly">
                <img
                  src="/bank firstbank.png"
                  alt="fcmb bank logo"
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className=" flex items-center justify-between flex-col h-[60px] w-[40%]">
                  <h1 className="text-md">Acc. No: 0000048493</h1>
                  <p className="text-xs">Acc. Name: Gifted natus foundation</p>
                </div>
                <FaRegCopy className="text-xl" onClick={() => window.navigator.clipboard.writeText("Account Numebr: 0000048493, Account Name: Gifted Natus Foundation")}/>
              </div>
              <div className="h-[1px] bg-gray-400 w-[60%] mx-auto my-7"></div>
              <div className="flex items-center justify-evenly">
                <img
                  src="/bank gtb.png"
                  alt="fcmb bank logo"
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className=" flex items-center justify-between flex-col h-[60px] w-[40%]">
                  <h1 className="text-md">Acc. No: 0000048493</h1>
                  <p className="text-xs">Acc. Name: Gifted natus foundation</p>
                </div>
                <FaRegCopy className="text-xl" onClick={() => window.navigator.clipboard.writeText("Account Numebr: 0000048493, Account Name: Gifted Natus Foundation")}/>
              </div>
            </div>
          </div>
          <img
            src="/man.png"
            alt=""
            className="absolute w-[500px] bottom-0 right-[490px] md:hidden sm:hidden"
          />
        </div>
        {/*volunteer*/}
        <div className=" flex items-center justify-evenly sm:justify-center md:justify-center">
          <img
            src="/Group 31.png"
            alt=""
            className="sm:hidden md:hidden w-[400px]"
          />
          <div className="flex flex-col items-center justify-evenly space-y-7 mb-5">
            <h1 className="text-center w-[350px] text-4xl sm:text-3xl sm:w-[300px]">
              JOIN OUR <span className="text-[#0156a9]">TEAM</span> OF{" "}
              <span className="text-[#07a034]">VOLUNTEERS</span>
            </h1>
            <p className="text-center">
              lend your time and skill to make a meaningfull impact in
              communities that need it most
            </p>
            <VolunteerForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
