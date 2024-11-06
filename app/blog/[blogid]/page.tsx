import Nav from "../../components/Nav"
import Footer from "../../components/Footer" 

export default function BlogPost ({params}){
    return( <div>
        <header className="bg-slate-900">
            <Nav/>
        </header>
        <Footer/>
    </div>

    )
}