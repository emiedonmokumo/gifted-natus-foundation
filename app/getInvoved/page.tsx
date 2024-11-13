import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function GetInvoved() {
  return (
    <div>
      <header className="bg-slate-900">
        <Nav />
      </header>
      {/* heading text */}
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl font-gobold mx-auto w-[500px] text-center sm:text-3xl">
          JOIN US IN MAKING A DIFFERENCE
        </h1>
        <div className="bg-[#07a034] w-[225px] h-[10px]"></div>
      </div>
      <p className="mx-auto w-[800px] text-center text-xl my-14">
        Every contribution you make helps us fund critical programs that change
        live and create lasting impact for those who needs it most{" "}
      </p>
      
      <Footer />
    </div>
  );
}
