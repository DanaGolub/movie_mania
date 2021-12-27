import {Link} from "react-router-dom"

function NavMain() {
    return (
        <nav className="nav-main">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/favs">Favs</Link></li>
            </ul>
        </nav>
    )
}

export default NavMain
