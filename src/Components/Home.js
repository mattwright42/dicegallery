import React from "react";
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Dice Gallery Website!</h1>
            <p>View the gallery images<Link to="/images" className="images-link">here</Link></p>
            <p>Upload more images to the gallery<Link to="/uploader" className="upload-link">here</Link></p>
        </div>
    )
}

export default Home