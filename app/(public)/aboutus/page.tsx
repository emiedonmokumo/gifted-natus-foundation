"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import CountUpComponent from "@/components/countup";
import AboutusSlider from "@/components/AboutSlider";
export default function Aboutus() {
  return (
    <>
      <header
        className="p-0 m-0 min-h-screen lg:pt-[200px] md:pt-[200px] sm:pt-[200px] space-y-2"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(hero2.jpeg)",
        }}
      >
        <Nav />
        <h1 className="text-[6rem] sm:text-6xl text-white font-low text-center">
          ABOUT US
        </h1>
        <p className="text-green-400 text-center lg:w-[60%] mx-auto md:w-[80%] sm:w-[80%]">
          Welcome to the Gifted Natus Foundation, a beacon of hope and
          empowerment for the people of Bayelsa State and beyond. Founded with a
          vision to inspire, uplift, and transform lives, our organization is
          driven by the belief that everyone deserves the opportunity to thrive.
        </p>
      </header>
      {/*onboarding section */}
      <div>
        <h1 className="text-4xl w-[80%] mx-auto text-center my-5 uppercase">
          Who <span className="text-[#07a034]">We</span>{" "}
          <span className="text-[#0156a9]">are</span>
        </h1>
        <div className="flex items-center justify-evenly my-16 sm:justify-center md:justify-center sm:flex-col-reverse md:flex-col-reverse px-5">
          <p className="w-[80%] sm:mx-auto sm:my-12 md:mx-auto md:my-12 text-justify lg:w-[45%] flex flex-col justify-evenly">
            <span>
              The Gifted Natus Foundation is a humanitarian and
              development-focused nonprofit dedicated to fostering sustainable
              growth in communities. From providing education scholarships to
              organizing skill acquisition programs, emergency relief
              initiatives, and health interventions, we are committed to
              addressing critical needs and unlocking potentials across all age
              groups.
            </span>
            <br />
            <span>
              Our founder, Hon. Comr. Gifted Meyah Natus, envisioned a
              foundation that would not only give back but also create lasting
              impacts by equipping individuals with the tools they need to build
              brighter futures.
            </span>
            {/* . Since our founding, we’ve been a
            beacon of hope, driven by the belief that together, we can build a
            stronger, kinder community. Join us in making a difference today{" "} */}
          </p>

          <img
            src="/aboutimg1.jpeg"
            alt=" child eating rice"
            className="lg:w-[45%] rounded-3xl"
          />
        </div>
      </div>
      {/**stat section */}
      {/* <CountUpComponent start={1} end={400}/> */}
      <h1 className="text-4xl w-[80%] mx-auto text-center my-12 uppercase">
        what <span className="text-[#07a034]">we</span>{" "}
        <span className="text-[#0156a9]">do</span>
      </h1>
      <AboutusSlider />
      {/* our impact */}
      <h1 className="text-4xl w-[80%] mx-auto text-center my-12 uppercase">
        our <span className="text-[#07a034]">impact</span>{" "}
      </h1>
      <p className="w-[80%] text-center mx-auto">
        Since our inception, the Gifted Natus Foundation has touched countless
        lives:
      </p>
      <div className="flex items-center justify-evenly sm:overflow-x-scroll mb-[200px]">
        <div className="sm:w-[500px] lg:flex">
          <div className="flex flex-col  items-center justify-evenly mt-7 space-y-5 mx-auto">
            <div className="w-20 h-20 rounded-full  bg-white shadow-black shadow-2xl flex items-center justify-center ">
              1
            </div>
            <p className="text-center w-[60%]">
              Over 300 beneficiaries trained in life-changing skills.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5 mt-7">
            <div className="w-20 h-20 rounded-full  bg-white shadow-black shadow-2xl flex items-center justify-center ">
              2
            </div>
            <p className="text-center w-[60%]">
              Multiple scholarships awarded to promising young minds.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5 mt-7">
            <div className="w-20 h-20 rounded-full  bg-white shadow-black shadow-2xl flex items-center justify-center ">
              3
            </div>
            <p className="text-center w-[60%]">
              Timely interventions in times of disaster and hardship.
            </p>
          </div>
        </div>
      </div>
      {/* our founder */}
      <h1 className="text-4xl w-[80%] mx-auto text-center mt-12 capitalize" id="founder">
        meet <span className="text-[#07a034]">our</span>{" "}
        <span className="text-[#0156a9]">founder</span>
      </h1>
      <p className="text-2xl mx-auto text-center uppercase my-10">
        gifted meyah natus
      </p>
      <div className="flex items-center justify-evenly md:flex-col sm:flex-col space-y-16">
        <img
          src="/gifted.jpeg"
          alt="gifted mayeh natus"
          className="lg:w-[45%] md:w-[80%] sm:w-[80%] mx-auto"
        />
        <p className="text-justify sm:w-[80%] md:w-[80%] lg:w-[45%] mx-auto">
          Hon. Comr. Gifted Meyah Natus is a visionary leader, philanthropist,
          and social innovator dedicated to creating lasting impact in Bayelsa
          State and beyond. As the Founder and CEO of the Gifted Natus
          Foundation, he has championed transformative initiatives in education,
          skill acquisition, youth empowerment, and community development,
          touching countless lives.
          <br />
          <br />
          A passionate advocate for innovation and lifelong learning, Hon.
          Gifted Natus combines his entrepreneurial acumen with a deep
          commitment to humanitarian causes, providing scholarships, supporting
          families, and empowering the underprivileged. His forward-thinking
          approach has positioned the foundation as a beacon of hope, nurturing
          talent and fostering sustainable growth in underserved communities.
          <br />
          <br />
          Beyond his philanthropic endeavors, Hon. Natus is an educator, mentor,
          and global traveler, drawing inspiration from diverse cultures to fuel
          his passion for progress. A tech enthusiast and creative thinker, he
          continually seeks innovative solutions to address societal challenges,
          bridging the gap between potential and opportunity for the people he
          serves.
          <br />
          <br />
          Hon. Comr. Gifted Natus is a shining example of leadership rooted in
          empathy, resilience, and an unwavering belief in the power of positive
          change.
        </p>
      </div>
      <Footer />
    </>
  );
}
