"use client"
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState} from "react"

export default function GetInvoved() {
  const [volunteer, setVolunteer] = useState<any>()

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setVolunteer({
      ...volunteer,
      [name]: value
    });
  };

  async function submit(){
    fetch("/api/route/volunteer", 
      {
        method: "POST",
        headers:{
          "contentType":"application/json"
        },
        body:JSON.stringify({
          ...volunteer
        })
      }
    )
  }

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
        <div className=""></div>
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
            <form className=" w-[300px] mx-auto  space-y-6">
              <div className="w-full flex items-center justify-between">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-[45%] h-[30px] bg-slate-200"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-[45%] h-[30px] bg-slate-200"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex justify-between">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-[45%] h-[30px] bg-slate-200"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-[45%] h-[30px] bg-slate-200"
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full h-[30px] bg-slate-200"
                onChange={handleChange}
              />

              <button className="bg-[#07a034] w-32 h-9 rounded-2xl text-white" >
                JOIN NOW
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
