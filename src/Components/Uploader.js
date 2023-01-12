import React from "react";
import { Uploader as UploadUploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploaderCon = UploadUploader({
  apiKey: "public_kW15b2fDDcaFAtEF9H4LAeQUUQcp",
}); // Your real API key.

const Uploader = () => {
  async function storeImage(file) {
    const payload = {
      filePath: file.filePath,
      fileUrl: file.fileUrl,
    };

    await fetch("http://localhost:8000/record/add", {
      //this is missing some info
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  }

  return (
    <div className="home">
      <h1>Upload Photos</h1>
      <UploadButton
        uploader={uploaderCon}
        options={{ multi: true }}
        onComplete={(files) => storeImage(files[0])}
      >
        {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
      </UploadButton>
    </div>
  );
};

export default Uploader;
