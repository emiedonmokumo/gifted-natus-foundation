"use client";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Link from "next/link";
import Head from "next/head";
import TeamCarousel from "./components/TeamCarousel2";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gifted Natus foundation - Home</title>
      </Head>
      <header className="w-full p-0 m-0 h-[90vh] bg-[url('./assets/headerBG.png')]">
        <Nav />
        <div className="lg:mt-20 pl-5">
          <div className=" w-full md:w-[70%] lg:w-[50%]">
            <h1 className="text-white font-bold text-2xl w-full text-center md:text-6xl lg:text-6xl pb-3 font-gobold">
              TOGETHER WE <span className="green-text">BUILD</span>{" "}
              <span className="blue-text">STRONGER</span> COMMUNITIES{" "}
            </h1>
            <p className="text-white text-center md:text-left lg:text-left">
              Empowering individuals through education, healthcare, and economic
              development to create a future filled with hope, opporturnity, and
              sustainable growth
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-4 py-5 mt-5">
            <Link
              href="#donate"
              className="w-[40%] md:w-auto lg:w-auto flex items-center justify-center green-bg h-8 py-5 px-5 rounded-md font-medium text-white hover:bg-green-900"
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
            <span className="blue-text">LATEST &nbsp;</span> NEWS&nbsp; AND
            <span className="green-text">&nbsp; UPDATE</span>&nbsp;
          </h1>
        </div>

        <Slider />

        <div id="aboutus">
          <div className="title mt-32" id="aboutus">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl flex flex-wrap items-center justify-center font-gobold">
              <span className="blue-text">WELCOME &nbsp;</span>  
              <span>TO</span> &nbsp;
              <span className="green-text">GIFTED </span>&nbsp;
              <span className="green-text">NATUS</span>&nbsp;
              <span>FOUNDATION</span> 
            </h1>
          </div>
          <div className="h-[700px] w-screen relative mb-0">
            <img
              src="/About1.png"
              alt=""
              className="  top-40 right-[20%] lg:top-44 md:top-24 w-[60%] lg:w-96 lg:right-[550px] mx-auto lg:ml-20 inline-block absolute z-10"
            />
            <div className=" bg-[url('/rectangleLeaf.png')] text-white h-96 w-full lg:w-[600px] lg:h-[200px] p-14 md:p-36 lg:p-10 inline-block absolute top-72 lg:top-52  lg:right-0 z-0">
              <p className="w-full text-center ">
                {" "}
                At Gifted Natus Foundation, the impact of our work in seen in
                the transformation of lives. Froom providing life-changing
                opportunities to individuals in need, to build stronger more
                resilient communities, our initiatives have been regnized for
                their far-reaching effects
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
          <img src="/supportImage.png" alt=" " className="w-96 h-full top-10 hidden lg:inline-block" />
          <div className="flex lg:items-end lg:justify-start items-center justify-evenly flex-col lg:w-6/12 lg:h-2/4 w-full h-full">
            <h1 className="font-bold text-4xl font-gobold lg:text-right text-center">
              <span className="blue-text">SUPPORT </span>OUR{" "}
              <span className="green-text">MISSION</span>
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
        <div className="lg:h-52 h-[400px] green-bg my-0 mx-auto lg:absolute  top-80 lg:w-[70%] lg:left-[15%] w-full flex items-center flex-col lg:flex-row justify-evenly p-7">
          <div className="w-2/4">
            <h1 className="font-gobold text-3xl text-center lg:text-5xl font-bold ">
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
        <Footer/>
      </footer>
    </div>
  );
}
