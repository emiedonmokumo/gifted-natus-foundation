import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
export default function Aboutus(){
    return(
        <>
        <header
        className="p-0 m-0 h-screen flex "
        style={{ backgroundSize: "cover", backgroundPosition: "center" ,backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(abouthero.jpeg)"}} >
            <Nav/>

        </header>

        </>
    )
}