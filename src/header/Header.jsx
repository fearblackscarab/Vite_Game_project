import { Link } from "react-router-dom";
import LargeNav from "./LargeNav";
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="logo-contain default">
                <Link to='/'><img src="/fear-logo.png" className="top-logo" alt='' /></Link>
            </div>
            <LargeNav />
        </header>
    )
}

export default Header