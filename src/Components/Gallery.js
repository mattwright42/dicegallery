import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [records, setRecords] = useState([]);

  //This method fetches the records from the database

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:8000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);

  //This will display the table with the gallery
  return (
    <div>
      <h1 className="home">Gallery</h1>
      <div>
        {records.length > 0 &&
          records.map((record) => {
            return <img src={record.fileUrl} width="200" height="200" />;
          })}
        {records.length === 0 && (
          <div className="home">
            <p>There are no images to display!</p>
            <p>
              <Link to="/uploader">Go upload</Link>some cool images!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
