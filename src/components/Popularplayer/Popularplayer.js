import React, { useEffect, useState } from "react";
import "./Popularplayer.css"
import axios from "axios";

const Popularplayer = () => {
  const [data, setData] = useState([]);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleCardMouseOver = (id) => {
    setHoveredCardId(id);
  };
  const handleCardMouseOut=()=>{
    setHoveredCardId(null)
  }

  return (
    <div className="App">
      {data.map((item) => (
        <div
          className={`card ${hoveredCardId === item.id ? "hovered" : ""}`}
          key={item.id}
          onMouseOver={() => handleCardMouseOver(item.id)}
          onMouseOut={handleCardMouseOut}
        >
          <div className="header1">
            <h2>Name: {item.firstName}</h2>
          </div>
          {hoveredCardId === item.id && (
            <div className="body1">
              <p>Email: {item.email}</p>
              <p>Contact Number: {item.contactNumber}</p>
              <p>Age: {item.age}</p>
              <p>Date of Birth: {item.dob}</p>
              <p>Score: {item.salary}</p>

            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Popularplayer;
