import React from "react";
import * as filestack from 'filestack-js';
import useExternalScripts from "../hooks/useExternalScripts";


const Uploader = () => {
    useExternalScripts("//static.filestackapi.com/filestack-js/3.x.x/filestack.min.js");
    const client = filestack.init(process.env.REACT_APP_FILESTACK_API_KEY);
    client.picker().open();
    return (
        <div>
            <h1>Welcome to the Uploader!</h1>
            <ul>
                <li>Home</li>
                <li>View Gallery</li>
                <li>Upload more images</li>
            </ul>
        </div>
    )
}

export default Uploader