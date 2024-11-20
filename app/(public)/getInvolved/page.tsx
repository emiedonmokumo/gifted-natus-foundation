"use client";
import Link from "next/link";
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
      <main className="pt-[100px]">
        <h1 className="text-4xl text-center lg:w-[500px] mx-auto my-8 font-gobold sm:text-2xl">
          Join us and make a{" "}
          <span className="text-slate-700 flex flex-col items-center">
            {" "}
            difference <div className="w-[180px] h-[5px] bg-[#07a034]"></div>
          </span>
        </h1>
        <p className="w-[80vw] text-center mx-auto my-[50px] ">
          At Gifted Natus Foundation, we are committed to transforming lives
          through impactful initiatives in Education & Empowerment,Humanitarian
          Support, Emergency Relief, and Human Capacity Development. Your
          participation, no matter the form, can create lasting change. Join us
          in building a brighter, more sustainable future for all.
          <br />
          <Link
            href={"#donate"}
            className="bg-[#1f5212] mt-6 h-[30px] w-[100px] flex items-center justify-center mx-auto rounded-lg text-white"
          >
            {" "}
            Donate
          </Link>
        </p>

        <h1 className="text-4xl text-center lg:w-[500px] mx-auto my-8 font-gobold sm:text-2xl">
          Ways to Get Involved
        </h1>

        <div className=" mx-auto flex items-center justify-evenly sm:flex-col md:flex-col">
          <div className="relative w-[250px] h-[900px]">
            <img
              src="/involved1.png"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="w-[130px] h-[130px] rounded-full flex items-center justify-center text-4xl bg-white shadow-black shadow-2xl absolute top-[180px] left-[60px] z-30">
              <p>01.</p>
            </div>
            <div className="mt-20 space-y-6">
              <Link
                href={"#donate"}
                className="text-3xl text-center block mx-auto font-gobold w-[200px]"
              >
                DONATE
              </Link>
              <p className="text-justify">
                Your financial support fuels our mission to improve education,
                healthcare, and skill development. Every contribution goes
                directly into funding <Link
                  href={"/programs-and-initiatives"}
                  className="  text-blue-800 underline"
                >
                  {" "}
                  our programs and initiatives
                </Link> that change lives.
                <br />
                • Support Education & Empowerment: Fund scholarships and
                educational competitions like the Bayelsa Mathematics Quiz.
                <br />
                • Promote Community Health & Well-Being: Help provide free
                health screenings, medication, and outreach programs.
                <br />• Advance Human Capacity Development: Sponsor skill
                acquisition programs such as the G-Skill initiative.
              </p>
            </div>
          </div>
          <div className="relative w-[250px] h-[900px]">
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
                VOLUNTEER
              </h1>
              <p className="text-justify">
                Make a hands-on impact by volunteering with us. Whether it’s
                mentoring students, supporting health programs, or assisting
                with skill acquisition initiatives, your time and expertise can
                create ripple effects.
                <br />
                • Education & Empowerment: Tutor or mentor young learners.
                <br />
                • Community Health & Well-Being: Assist during medical outreach
                programs.
                <br />
                • Human Capacity Development: Share your skills with
                participants in vocational training programs.
                <br />
                <Link
                  href={"#volunteer"}
                  className="bg-[#1f5212] mt-6 h-[30px] w-[200px] flex items-center justify-center mx-auto rounded-lg text-white"
                >
                  {" "}
                  BECOME A VOLUNTEER
                </Link>
              </p>
            </div>
          </div>
          <div className="relative w-[250px] h-[900px] ">
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
                PARTNER WITH US
              </h1>
              <p className="text-center">
                Collaboration is at the heart of our success. Partner with us to
                expand the reach of our programs in education, healthcare, and
                capacity building.
                <br />
                • Corporate Sponsorship: Invest in our community-based projects.
                <br />
                • NGO Collaboration: Co-host events and initiatives in Bayelsa.
                <br />• Government Partnerships: Join forces to scale impact in
                local communities.
                <br/>
                <Link
                  href={"#contact"}
                  className="  text-blue-800 mt-5"
                >
                  {" "}
                  click here 
                </Link>
                <span className="uppercase font-gobold"> to contact us for partnership</span>
              </p>
            </div>
          </div>
        </div>
        {/*donate section*/}
        <div
          className="relative h-[600px] mb-11 md:h-[300px] sm:h-[300px]"
          id="donate"
        >
          <img
            src="/background.jpeg"
            alt=""
            className="absolute left-0 bottom-0 h-[60%] w-full  md:hidden sm:hidden"
          />
          <div className="bg-[#113152] text-white space-y-6 w-[500px] h-[100%] absolute top-0 left-[500px] md:w-full sm:w-full md:relative sm:relative md:right-0 sm:right-0 pt-7 ">
            <h1 className="text-4xl text-center">
              Donate <span className="text-[#07a034]">Today</span>
            </h1>
            <p className="text-center">Your contribution makes a difference</p>
            <div className="">
              <div className="flex items-center justify-evenly">
                <img
                  src="/premium trust bank.png"
                  alt="Premium trust bank logo"
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className=" flex items-center justify-between flex-col h-[60px] w-[40%]">
                  <h1 className="text-md">Acc. No: 0040155182</h1>
                  <p className="text-xs">Acc. Name: Gifted natus foundation</p>
                </div>
                <FaRegCopy
                  className="text-xl"
                  onClick={() =>
                    window.navigator.clipboard.writeText(
                      "Account Numebr: 0000048493, Account Name: Gifted Natus Foundation Bank: Premium Trust Bank"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <img
            src="/man.png"
            alt=""
            className="absolute w-[500px] bottom-0 left-[0px] md:hidden sm:hidden"
          />
        </div>
        {/*volunteer*/}
        <div className=" flex items-center justify-evenly sm:justify-center md:justify-center">
          <img
            src="/Group 31.png"
            alt=""
            className="sm:hidden md:hidden w-[400px]"
          />
          <div
            className="flex flex-col items-center justify-evenly space-y-7 mb-5 "
            id="volunteer"
          >
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
