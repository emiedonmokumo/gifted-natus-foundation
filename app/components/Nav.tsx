import Link from "next/link";

export default function Nav(){
    return(
        <nav className="text-white flex align-center justify-evenly lg:w-1/3 nav lg:pt-3">
            <Link href="#about">About us</Link>
            <Link href="#contact">Contact Us</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#donate" className="green-text">donate &rarr;</Link>
        </nav>
    )
}