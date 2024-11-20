"use client"
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Link from "next/link";
import TeamCarousel from "@/components/TeamCarousel";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState<string>()

  const handleSubscription = async () => {
    if (!email || email === '') {
      alert("Email is required")
      return
    }

    try {
      const response = await axios.post('/api/newsletter', { email })
      if (response.status == 201) {
        setEmail('')
        alert(response.data.message)
      } 

    } catch (error: any) {
      alert(error.response.data.message)
      console.log(error)
    }

  }
  const loading = useRef<HTMLDivElement | undefined>()
  return (
    <div>
        <header
          className="p-0 m-0 h-screen  "
          style={{ backgroundSize: "cover", backgroundPosition: "center" ,backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(hero2.jpeg)"}}
        >
          <Nav />
          <div className="lg:mt-20 md:mt-20 sm:pt-48 pl-5">
            <div className=" md:w-[70%] lg:w-[70%]">
              <h1 className="sm:flex sm:flex-wrap text-white w-full md:text-5xl sm:text-4xl lg:text-6xl pb-3 font-gobold px-">
                TOGETHER WE{" "}
                <span className="text-[#07a034] sm:pl-2">BUILD</span>{" "}
                <span className="lg:my-2 h-1 block"></span>{" "}
                <span className="text-[#0156a9]">STRONGER</span>  COMMUNITIES{" "}
              </h1>
              <p className="w-[80%] text-white text-lg lg:text-justify md:text-left sm:text-sm sm:text-justify mr-5 sm:leading-6">
                Empowering individuals through education, healthcare, and
                economic development to create a future filled with hope,
                opporturnity, and sustainable growth
              </p>
            </div>
            <div className="md:mb-20 flex items-center md:justify-start lg:justify-start space-x-4 py-5 mt-5">
              <Link
                href="/getInvolved"
                className="w-[40%] md:w-auto lg:w-auto flex items-center justify-center bg-[#07a034] h-8 py-5 px-5 rounded-md font-medium text-white hover:bg-green-900 sm:w-[150px]"
              >
                Get involved
              </Link>
              <Link href="#about" className="text-white hover:text-green-600">
                See more &rarr;
              </Link>
            </div>
          </div>
      </header>
      <main>
        <div className="title mt-32" id="about">
          <h1 className="font-bold text-2xl lg:text-4xl md:text-4xl flex  flex-wrap items-center justify-center">
            <span className="text-[#0156a9]">LATEST &nbsp;</span> NEWS&nbsp;
            AND
            <span className="text-[#07a034]">&nbsp; UPDATE</span>&nbsp;
          </h1>
        </div>

        <Slider />

        <div id="aboutus">
          <div className="title lg:mt-32" id="aboutus">
            <h1 className="text-3xl md:text-4xl lg:text-4xl flex flex-wrap items-center justify-center font-gobold">
              <span className="text-[#0156a9]">WELCOME &nbsp;</span>
              <span>TO</span> &nbsp;
              <span className="text-[#07a034]">GIFTED </span>&nbsp;
              <span className="text-[#07a034]">NATUS</span>&nbsp;
              <span>FOUNDATION</span>
            </h1>
          </div>
          <div className="h-[900px] relative mb-0 sm:flex sm:flex-col sm:justify-center sm:h-[600px]">
            {/* Center the image on mobile by using flexbox */}
            <div className="flex justify-center">
              <img
                src="/ourMission.jpeg"
                alt=""
                className="top-0 sm:top-10  lg:top-44 md:top-24 rounded-2xl w-[80%] lg:w-96 lg:right-[550px] lg:ml-20 lg:inline-block absolute lg:z-10"
              />
            </div>
            <div className="sm:py-12 sm:pt-10 bg-[#0d1c38] text-white md:mt-[400px] w-full lg:w-[600px] lg:h-[200px] p-5 md:p-52 lg:p-14 inline-block lg:absolute md:top-72 lg:top-52 lg:right-0 lg:z-0">
              <p className="lg:w-full text-center sm:text-sm">
                <br className="lg:hidden md:hidden"/>
                At Gifted Natus Foundation, the impact of our work is seen in
                the transformation of lives. From providing life-changing
                opportunities to individuals in need, to building stronger,
                more resilient communities, our initiatives have been
                recognized for their far-reaching effects.
              </p>
            </div>
          </div>
        </div>
        <div
          id="statement"
          className="mt-0 flex items-center space-y-36 justify-between flex-col md:h-auto md:mt-[200px] lg:h-auto h-[calc(500px * 3)]"
        >
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <img
              src="/aboutmission.png"
              alt=" our mission"
              className="w-[300px] h-auto"
            />
            <div className="flex items-center lg:items-end h-80 justify-evenly flex-col p-10 lg:w-[60%] space-y-4">
              <h1 className="font-bold text-4xl font-gobold">
                OUR <span className="text-[#07a034]">MISSION</span>
              </h1>
              <h2 className="font-bold text-center lg:text-right">
                Making A Difference Everyday
              </h2>
              <p className="lg:text-right text-center">
                Gifted Natus Foundation is a non-profit Organization with a
                vision to create lasting change through community and human
                capacity development. At the heart of our mission is our
                belief in empowering individuals and communities, helping them
                reach thier full potential.
              </p>
            </div>
          </div>
          <div className="h-[900px] relative mb-0 sm:flex sm:flex-col sm:justify-center sm:h-[800px]">
            {/* Center the image on mobile by using flexbox */}
            <div className="flex justify-center">
              <img
                src="/ourMission.jpeg"
                alt=""
                className="top-0 sm:top-32 lg:top-44 md:top-24 rounded-2xl w-[80%] lg:w-96 lg:right-[550px] lg:ml-20 lg:inline-block absolute lg:z-10"
              />
            </div>

            <div className="sm:pt-12 sm:pt-40 bg-[#0d1c38] text-white md:mt-[400px] w-full lg:w-[600px] lg:h-[200px] p-5 md:p-52 lg:p-14 inline-block lg:absolute md:top-72 lg:top-52 lg:right-0 lg:z-0 sm:h-[400px]">
              <p className="lg:w-full text-center sm:text-sm">
                At Gifted Natus Foundation, the impact of our work is seen in
                the transformation of lives. From providing life-changing
                opportunities to individuals in need, to building stronger,
                more resilient communities, our initiatives have been
                recognized for their far-reaching effects.
              </p>
            </div>
          </div>
          <div className="h-[800px] mb-14 lg:h-auto  flex items-center justify-evenly flex-col lg:flex-row">
            <img
              src="/aboutimpact.png"
              alt=" our impact"
              className="w-[300px] h-auto"
            />
            <div className="flex lg:items-end items-center h-80 justify-evenly flex-col p-10 lg:w-[60%] space-y-4">
              <h1 className="font-bold text-4xl font-gobold ">
                OUR <span className="text-[#07a034]">IMPACT</span>
              </h1>
              <h2 className="font-bold w-52">
                Transforming lives, one community at a time
              </h2>
              <p className="text-center lg:text-right">
                Gifted Natus foundation is a non-profit Organization with a
                vision to create lasting change through community and human
                capacity development. At the heart of our mission is our
                belief in empowering individuals and communities, helping them
                reach thier full potential.
              </p>
            </div>
          </div>
        </div>
        {/* <TeamCarousel /> */}
        <TeamCarousel />
      </main>
      <footer className="relative w-screen">
        <div
          className="w-screen h-96 flex items-center justify-start relative "
          id="donate"
        >
          <img
            src="/supportImage.png"
            alt=" "
            className="w-96 h-full top-10 hidden lg:inline-block"
          />
          <div
            className="flex lg:items-end lg:justify-start items-center justify-evenly flex-col lg:w-6/12 lg:h-2/4 w-full h-full"
            id="donate"
          >
            <h1 className="font-bold text-4xl font-gobold lg:text-right text-center">
              <span className="text-[#0156a9]">SUPPORT </span>OUR{" "}
              <span className="text-[#07a034]">MISSION</span>
            </h1>
            <p className="lg:text-right text-center w-2/4">
              Every donation, big or small helps us continue our work and
              expand our reach, together we can build a brighter future
            </p>
            <Link href={"/getInvolved#donate"} className="bg-[#07a034] rounded-xl h-10 w-40 text-white font-bold flex items-center justify-center">
              {" "}
              Donate Today!
            </Link>
          </div>
        </div>
        <div className="lg:h-52 h-[400px]  leading-7 bg-[#07a034] lg:absolute top-80 lg:w-[70%] lg:left-[15%] w-full flex items-center flex-col lg:flex-row justify-evenly p-7">
          <div className="w-full lg:w-2/4 md:w-2/4">
            <h1 className="font-gobold text-3xl text-center lg:text-5xl font-bold mb-5 ">
              <span className="text-white">STAY</span>{" "}
              <span className="to-blue-950">UPDATED!</span>
            </h1>
            <p className="text-white w-full text-center">
              be the first to hear about our latest initiatives, success
              stories, and ways you can get involved
            </p>
          </div>
          <div className="lg:w-2/4 w-3/4 h-full flex items-center justify-evenly flex-col">
            <p className="text-white text-center">
              subcribe to our newsletter
            </p>
            <div className="">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="h-10 w-full text-center"
              />
            </div>
            {/* as i merge i no see the function so i jus comment ham*/}
            <button onClick={handleSubscription}
              id="submit"
              className="bg-slate-950 text-white flex items-center justify-center w-40 h-10 rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
        <Footer />
      </footer>
    </div >
  );
}
