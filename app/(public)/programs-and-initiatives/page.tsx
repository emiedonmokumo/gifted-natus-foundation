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
          Our <span className="text-[#0156a9]">Programs</span> & <span className="text-[#07a034]">Initiatives</span>
        </h1>
        <p className="w-[80vw] text-center mx-auto my-[50px] ">
          The Gifted Natus Foundation is committed to driving meaningful change
          through innovative programs and initiatives categorized under three
          core areas: Education & Empowerment, Community Health & Well-Being,
          and Human Capacity Development. Each category represents our
          dedication to transforming lives and building a sustainable future for
          Bayelsa State and beyond.
        </p>

        
      <div className="slider-container">
        <div className="slider-track">
          <div className="slide">
            <img src={"silder (1).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (2).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (3).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (4).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (5).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (6).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (7).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (8).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (9).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (10).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (11).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (12).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (13).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (14).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (15).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (16).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (17).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (18).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (19).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (20).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (21).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (22).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (23).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (24).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (25).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (26).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (27).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (28).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (29).jpeg"} alt="" />
          </div>
          
          <div className="slide">
            <img src={"silder (30).jpeg"} alt="" />
          </div>
        </div>
      </div>


        <div className=" mx-auto flex items-center justify-evenly sm:flex-col md:flex-col">
          <div className=" lg:w-[250px] sm:w-[80%] lg:h-[1500px] h-[1300px]">
            <img
              src= "education.jpeg"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="mt-20 space-y-6">
              <h1 className="text-3xl text-center mx-auto font-gobold w-[200px]">
                Education & Empowerment
              </h1>
              <p className="text-justify sm:w-full">
                We believe education is the most powerful tool for change.
                Through our programs, we provide opportunities for academic
                excellence, skills acquisition, and empowerment to ensure
                individuals can achieve their full potential.
                <br />
                • Bayelsa Mathematics Quiz Competition: Promoting academic
                excellence in mathematics by organizing competitions for
                secondary school students, rewarding winners with cash prizes
                and scholarships.
                <br />
                • Scholarship Awards: Providing life-changing scholarships from
                nursery to university for deserving children, including Miss
                Eluan Johnson Ogbomade and Baby Yona Pricwell.
                <br />
                • G-Skill Program: Empowering over 500 young Bayelsans with
                practical skills such as Advanced Graphic Design, Fashion
                Design, ICT, and Photo Editing, with plans to train 5,000
                individuals by 2030.
                <br />• Support for ICT Education: Partnering with organizations
                to train Ijaw youths in ICT, preparing them for success in the
                digital economy.
              </p>
            </div>
          </div>
          <div className=" lg:w-[250px] sm:w-[80%] lg:h-[1500px] h-[1000px]">
            <img
              src="community.jpeg"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="mt-20 space-y-6">
              <h1 className="text-3xl text-center mx-auto font-gobold w-[200px]">
                Humanitarian Support and Emergency Relief
              </h1>
              <p className="text-justify sm:w-full">
                In times of need, we stand by vulnerable communities to provide
                relief and support, addressing critical challenges with
                compassion.
                <br />
                • Emergency Relief Programs:
                <br />
                Providing critical aid to families in times of crisis, including
                food, shelter, and medical supplies.
                <br />
                • Monthly Stipends for Vulnerable Children:
                <br />
                Offering financial support, such as the ₦50,000 monthly stipend
                for Baby Yona Pricwell, to ensure children receive the care and
                resources they need.
                <br />
                • Health Campaigns:
                <br />
                Raising awareness and improving access to healthcare services
                for underprivileged communities.
              </p>
            </div>
          </div>
          <div className="relative lg:w-[250px] sm:w-[80%] lg:h-[1500px] h-[1000px]">
            <img
              src="support.jpeg"
              alt=""
              className="w-full h-[250px] rounded-t-xl z-0"
            />
            <div className="mt-20 space-y-6">
              <h1 className="text-3xl text-center mx-auto font-gobold w-[200px]">
                Human Capacity Development
              </h1>
              <p className="text-justify sm:w-full">
                We aim to foster self-reliance and entrepreneurship by equipping
                individuals with the knowledge, skills, and tools to succeed.
                <br />
                • Skill Acquisition Programs:
                <br />
                Training youths and women in lucrative skills such as soap
                making, paint production, tailoring, and makeup artistry to
                enable them to generate income.
                <br />
                • Capacity Building Seminars:
                <br />
                Organizing workshops to educate communities on personal
                development, financial literacy, and sustainable practices.
                <br />
                • Starter Packs for Entrepreneurs:
                <br />
                Providing beneficiaries with resources and equipment to launch
                their businesses after completing training programs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
