import React ,{useState}from 'react'

import "./Team.css";
 let data = [ {id : 1 ,team : "AUSTRALIA" ,captain : "MEG LANNING"},
 {"id" : 2 ,"team" : "ENGLAND" ,captain : "NIGAR SULTANA"},
 {id : 3 ,team : "WEST INDIES" ,captain : "Heather Knight"},
 {id : 4 ,team : "NEW ZEALAND" ,captain : "Laura Delany"},
 {id : 5 ,team : "INDIA",captain : " Harmanpreet Kaur"},
 {id : 6 ,team : "SOUTH AFRICA",captain : "Sophie Devine"},
 {id : 7 ,team : "SRI LANKA",captain : "Bismah Maroof"},
 {id : 8 ,team : "PAKISTAN",captain : "Suné Luus"},
 {id : 9 ,team : "BANGLADESH",captain : "Chamari Athapaththu"},
 {id : 10 ,team : "IRELAND",captain : "Hayley Matthews"},
 {id : 11 ,team : "THAILAND",captain : "Courtney Walsh"}
 ]

const Team = () => {
    const [hoveredCardId, setHoveredCardId] = useState(null);

    const handleCardMouseOver = (id) => {
      setHoveredCardId(id);
    }
  
    const handleCardMouseOut = () => {
      setHoveredCardId(null);
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
          <h2>{item.team}</h2>
        </div>
        {hoveredCardId === item.id && (
          <div className="body1">
            <p>captain: {item.captain}</p>
            
          </div>
        )}
      </div>
    ))}
  </div>
  )
}
export default Team;