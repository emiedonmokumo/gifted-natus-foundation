import Nav from "./components/Nav"
import Slider from "./components/Slider";
import Head from "next/head";
import TeamCarousel from "./components/TeamCarousel";
export default function Home() {

  return (
    <>
    <Head>
      <title>Gifted Natus foundation - Home</title>
    </Head>
    <header className="w-screen h header bg-[url('./assets/headerBG.png')]">
      <div className="w-52 flex items-center justify-evenly">
      <img src="/logo.png" alt="logo" className="w-9"/>
      <p className="text-white">Gifted Natus<br/> foundation</p>
      </div>
      <Nav/>
      <div className="lg:mt-32 lg:mr-32">
        <h1 className="text-white font-bold text-5xl py-3">TOGETHER WE <span className="green-text">BUILD</span> <span className="blue-text">STRONGER</span> COMMUNITIES </h1>
        <p className="text-white">Empowering individuals through education, healthcare, and economic development to create a future filled with hope, opporturnity, and sustainable growth</p>
      </div>
      <div className="cta flex items-center justify-between">
        <a href="#donate" className="flex items-center justify-center green-bg h-8 donate">donate</a>
        <a href="#about" className="text-white">see more &rarr;</a>
      </div>
    </header>
    <main>
      <div id="blog" >
            
        <div className="title mt-32">
          <h1 className="font-bold text-4xl flex items-center justify-center">LATEST &nbsp;<span className="blue-text">NEWS</span>&nbsp; AND <span className="green-text"> &nbsp; UPDATES</span></h1>
          <p className="flex items-center justify-center">stay informed about our work and  community impact</p>
        </div>
        <div className="relative mt-20">
          <Slider/>
          <div className=""></div>
        </div>
      </div>
      <div id="aboutus">
        <div className="title mt-32" id="aboutus">
            <h1 className="font-bold text-4xl flex items-center justify-center"><span className="blue-text">WELCOME &nbsp;</span> TO &nbsp;<span className="green-text">&nbsp;GIFTED NATUS</span>&nbsp; FOUNDATION</h1>
        </div>
        <div className="w-screen relative h-auto">
            <img src="/About1.png" alt="" className="w-1/3 ml-20 inline-block  mt-52" />
            <div className="w-2/3 bg-slate-900 h-96 inline-block"><p className="text-left"> At Gifted Natus Foundation, the impact of our work in seen in the transformation of lives. Froom providing life-changing opportunities to individuals in need, to build stronger more resilient communities, our initiatives have been regnized for their far-reaching effects</p></div>
        </div>
      </div>

    </main>
    <footer>
      
    </footer>
    </>
    );
}
