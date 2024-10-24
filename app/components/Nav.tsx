export default function Nav(){
    return(
        <nav className="text-white flex align-center justify-evenly lg:w-1/3 nav">
            <a href="#about">About us</a>
            <a href="#contact">Contact Us</a>
            <a href="#blog">Blog</a>
            <a href="#donate" className="green-text">donate &rarr;</a>
        </nav>
    )
}