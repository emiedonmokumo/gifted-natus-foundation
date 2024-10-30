"use client";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Link from "next/link";
import Head from "next/head";
import TeamCarousel from "./components/TeamCarousel";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gifted Natus foundation - Home</title>
      </Head>
      <header
        className="p-0 m-0 h-screen bg-[url('./assets/headerBG.png')]"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <Nav />
        <div className="lg:mt-20 md:mt-20 sm:pt-16 pl-5">
          <div className=" md:w-[70%] lg:w-[70%]">
            <h1 className="sm:flex sm:flex-wrap text-white w-full md:text-5xl sm:text-4xl lg:text-6xl pb-3 font-gobold">
              TOGETHER WE <span className="text-[#07a034] sm:pl-2">BUILD</span>{" "}
              <span className="lg:my-2 h-1 block"></span>{" "}
              <span className="text-[#0156a9]">STRONGER</span> COMMUNITIES{" "}
            </h1>                     
            <p className="text-white text-lg lg:text-justify md:text-left sm:text-sm lg:px-5 sm:text-justify mr-5 sm:leading-6">
              Empowering individuals through education, healthcare, and economic
              development to create a future filled with hope, opporturnity, and
              sustainable growth
            </p>
          </div>
          <div className="md:mb-20 flex items-center md:justify-start lg:justify-start space-x-4 py-5 mt-5">
            <Link
              href="#donate"
              className="w-[40%] md:w-auto lg:w-auto flex items-center justify-center bg-[#07a034] h-8 py-5 px-5 rounded-md font-medium text-white hover:bg-green-900"
            >
              Donate
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
            <span className="text-[#0156a9]">LATEST &nbsp;</span> NEWS&nbsp; AND
            <span className="text-[#07a034]">&nbsp; UPDATE</span>&nbsp;
          </h1>
        </div>

        <Slider />

        <div id="aboutus">
          <div className="title lg:mt-32" id="aboutus">
            <h1 className="text-2xl md:text-4xl lg:text-4xl flex flex-wrap items-center justify-center font-gobold">
              <span className="text-[#0156a9]">WELCOME &nbsp;</span>
              <span>TO</span> &nbsp;
              <span className="text-[#07a034]">GIFTED </span>&nbsp;
              <span className="text-[#07a034]">NATUS</span>&nbsp;
              <span>FOUNDATION</span>
            </h1>
          </div>
          <div className="h-[700px] w-screen relative mb-0 sm:flex sm:flex-col sm:justify-center">
            {/* Center the image on mobile by using flexbox */}
            <div className="flex justify-center">
              <img
                src="/About1.png"
                alt=""
                className="top-40 sm:top-20 md:right-[20%] lg:top-44 md:top-24 w-[80%] lg:w-96 lg:right-[550px] lg:ml-20 lg:inline-block absolute lg:z-10"
              />
            </div>

            <div className="sm:py-12 sm:pt-32 bg-[url('/rectangleLeaf.png')] text-white md:h-96 w-full lg:w-[600px] lg:h-[200px] p-5 md:p-36 lg:p-14 inline-block lg:absolute md:top-72 lg:top-52 lg:right-0 lg:z-0">
              <p className="lg:w-full text-center sm:text-sm">
                At Gifted Natus Foundation, the impact of our work is seen in
                the transformation of lives. From providing life-changing
                opportunities to individuals in need, to building stronger, more
                resilient communities, our initiatives have been recognized for
                their far-reaching effects.
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
          <div className="flex lg:items-end lg:justify-start items-center justify-evenly flex-col lg:w-6/12 lg:h-2/4 w-full h-full">
            <h1 className="font-bold text-4xl font-gobold lg:text-right text-center">
              <span className="text-[#0156a9]">SUPPORT </span>OUR{" "}
              <span className="text-[#07a034]">MISSION</span>
            </h1>
            <p className="lg:text-right text-center w-2/4">
              Every donation, big or small helps us continue our work and expand
              our reach, together we can build a brighter future
            </p>
            <div className="green-bg rounded-xl h-10 w-40 text-white font-bold flex items-center justify-center">
              {" "}
              Donate Today!
            </div>
          </div>
        </div>
        <div className="lg:h-52 h-[400px]  leading-7 bg-[#07a034] my-0 mx-auto lg:absolute  top-80 lg:w-[70%] lg:left-[15%] w-full flex items-center flex-col lg:flex-row justify-evenly p-7">
          <div className="w-2/4">
            <h1 className="font-gobold text-3xl text-center lg:text-5xl font-bold mb-5 ">
              <span className="text-white">STAY</span>{" "}
              <span className="to-blue-950">UPDATED!</span>
            </h1>
            <p className="text-white w-full text-center">
              be the first to hear about our latest initiatives success stories
              and ways you can get involved
            </p>
          </div>
          <div className="lg:w-2/4 w-3/4 h-full flex items-center justify-evenly flex-col">
            <p className="text-white text-center">subcribe to our newsletter</p>
            <div className="form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="h-10 w-full text-center"
              />
            </div>
            <div
              id="submit"
              className="bg-slate-950 text-white flex items-center justify-center w-40 h-10 rounded-lg"
            >
              Subscribe
            </div>
          </div>
        </div>
        <Footer />
      </footer>
    </div>
  );
}
