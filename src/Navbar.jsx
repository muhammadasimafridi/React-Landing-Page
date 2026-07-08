import "./Navbar.css"
import reactImg from "./assets/react.svg"

function Navbar() {
    return <> 
        <nav>
            <a href="#" className="web-icon"><img src={reactImg} alt="React Icon" />React Landing Page</a>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#courseCard">Course Card</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>
        </nav>
    </>
}

export default Navbar;