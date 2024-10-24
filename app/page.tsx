import Nav from "./components/Nav"
import Slider from "./components/Slider";
import Head from "next/head";
export default function Home() {

  return (
<<<<<<< HEAD
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
      <div className="header-text">
        <h1 className="text-white font-bold text-4xl">TOGETHER WE <span className="green-text">BUILD</span> <br/><span className="blue-text">STRONGER</span> COMMUNITIES </h1>
        <p className="text-white">Empowering individuals through education, healthcare, and economic development to <br/> create a future filled with hope, opporturnity, and sustainable growth</p>
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
    </main>
    <footer>
      
    </footer>
    </>
=======
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-2xl font-bold">Site in Development Mode </h1>
    </div>
>>>>>>> d409c3f8611c7b66926f71dfe7f3cd5686f15729
    );
}
