import Logo from "../assets/react.svg"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="leftside">
                <img src={Logo} alt="" />
            </div>
            <div className="rightside">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}