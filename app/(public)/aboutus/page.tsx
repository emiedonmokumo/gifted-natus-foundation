"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CountUpComponent from "@/components/countup";
export default function Aboutus() {
  return (
    <>
      <header
        className="p-0 m-0 min-h-screen flex items-center justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(hero2.jpeg)",
        }}
      >
        <Nav />
        <h1 className="text-[8rem] sm:text-6xl text-white font-low">
          ABOUT US
        </h1>
      </header>
      {/*onboarding section */}
      <div>
        <h1 className="text-4xl w-[80%] mx-auto text-center my-12">
          Welcome to <span className="text-[#07a034]">Gifted</span> Natus{" "}
          <span className="text-[#0156a9]">Foundation</span>
        </h1>
        <p className="text-2xl mx-auto text-center">
          where compassion fuels action and empowerment sparks change.
        </p>
        <div className="flex items-center justify-evenly my-16 sm:justify-center md:justify-center sm:flex-col-reverse md:flex-col-reverse px-5">
          <p className="w-[80%] sm:mx-auto sm:my-12 md:mx-auto md:my-12 text-justify lg:w-[45%] ">
            Our mission is to uplift youth, families, and seniors in our
            community.Through: dynamic training programs we equip young people
            with the skills to lead, thrive in the workforce, contribute
            meaningfully. We also provide emergency supplies like food and
            clothing to families in crisis and offer care and resources to
            support our seniors with dignity
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
      <h1 className="text-4xl w-[80%] mx-auto text-center my-12 capitalize">
        meet <span className="text-[#07a034]">our</span>{" "}
        <span className="text-[#0156a9]">founder</span>
      </h1>
      <p className="text-2xl mx-auto text-center uppercase my-10">
        gifted meyah natus
      </p>
      <div className="flex items-center justify-evenly md:flex-col sm:flex-col space-y-16">
        <img
          src="/gifted.jfif"
          alt="gifted mayeh natus"
          className="lg:w-[45%] md:w-[80%] sm:w-[80%] mx-auto"
        />
        <p className="text-justify sm:w-[80%] md:w-[80%] lg:w-[45%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi natus corrupti maxime minus, nihil magni magnam laborum vero quod culpa itaque harum, placeat sint. Sed asperiores saepe eveniet temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae dolore facere aspernatur nulla, placeat molestiae veritatis maxime. Optio quos architecto fugit facilis, nesciunt possimus? Ex est explicabo velit veniam.</p>
      </div>

      <Footer />
    </>
  );
}
