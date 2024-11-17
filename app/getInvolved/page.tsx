import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="">
      <header className="bg-slate-900">
        <Nav />
      </header>
      <main>
        <h1 className="text-3xl text-center">
          Join us and make a <span className="text-slate-700">  difference</span>
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default page;
