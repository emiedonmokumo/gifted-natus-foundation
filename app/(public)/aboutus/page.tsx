import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
export default function Aboutus(){
    return(
        <>
        <header
        className="p-0 m-0 h-screen flex items-center justify-center"
        style={{ backgroundSize: "cover", backgroundPosition: "center",backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(hero2.jpeg)"}} >
            <Nav/>
            <h1 className="text-[8rem] text-white font-low">ABOUT US</h1>
        </header>

        </>
    )
}