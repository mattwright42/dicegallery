import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dice Gallery</h1>
            <Link to="/">Home</Link>
            <Link to="/images">Dice</Link>
            <Link to="/uploader">Upload</Link>
        </nav>
    )
}

export default Navbar