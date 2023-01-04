import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="site-title">
                <h1>Dice Gallery</h1>
            </div>
            <div className="site-links">
                <Link to="/">Home</Link>
                <Link to="/images">Dice</Link>
                <Link to="/uploader">Upload</Link>
            </div>
            
        </nav>
    )
}

export default Navbar