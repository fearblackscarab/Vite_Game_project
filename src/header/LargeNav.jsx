import { Link } from "react-router-dom";

const LargeNav = () => {
    return (
        <div className="nav default inline">
            <Link to='/' className="home-nav nav-link">Home</Link>
            <Link to='/game' className="game-nav nav-link">Game</Link>
            <Link to='/info' className="info-nav nav-link">Info</Link>
        </div>
    )
}

export default LargeNav