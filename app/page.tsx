import Nav from "./components/Nav"
import Slider from "./components/Slider";
import Link from "next/link";
import Head from "next/head";
import TeamCarousel from "./components/TeamCarousel";
export default function Home() {

  return (
    <>
      <Head>
        <title>Gifted Natus foundation - Home</title>
      </Head>
      <header className="w-screen h header bg-[url('./assets/headerBG.png')]">
        <div className="flex justify-between items-center">
          <div className="w-52 flex items-center justify-evenly">
            <img src="/logo.png" alt="logo" className="w-9" />
            <p className="text-white">Gifted Natus<br /> foundation</p>
          </div>
          <Nav />
        </div>
        <div className="lg:mt-20 pl-5">
          <div className=" lg:mr-32 w-[70%]">
            <h1 className="text-white font-bold text-6xl pb-3 font-gobold">TOGETHER WE <span className="green-text">BUILD</span> <span className="blue-text">STRONGER</span> COMMUNITIES </h1>
            <p className="text-white">Empowering individuals through education, healthcare, and economic development to create a future filled with hope, opporturnity, and sustainable growth</p>
          </div>
          <div className="flex items-center justify-start space-x-4 py-5 mt-5">
            <Link href="#donate" className="flex items-center justify-center green-bg h-8 py-5 px-5 rounded-md font-medium text-white hover:bg-green-900">Donate</Link>
            <Link href="#about" className="text-white hover:text-green-600">See more &rarr;</Link>
          </div>
        </div>

      </header>
      <main>
        <div id="blog" >

          <div className="title mt-32">
            <h1 className="font-bold text-4xl flex items-center justify-center">LATEST &nbsp;<span className="blue-text">NEWS</span>&nbsp; AND <span className="green-text"> &nbsp; UPDATES</span></h1>
            <p className="flex items-center justify-center">stay informed about our work and  community impact</p>
          </div>
          <div className="relative mt-20">
            <Slider />
            <div className=""></div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
}
