import React, { useState, useContext } from 'react';
import { ScoreContext } from '../../App';
import "./Leaderboard.css"

function Scores() {
  const { scores, removeScore } = useContext(ScoreContext);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (index) => {
    removeScore(index);
  };

  const filteredScores = scores.filter((score) =>
    score.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="score">
      <h3 style={{ textAlign: "center" }}>{filteredScores.length ? "Leaderboard": "Yet scores not added"}</h3>
      <div className="Searchbar">
        <input className="search" type="text" placeholder="Search player name" onChange={handleSearch} />
      </div>
      <div className="card-container">
        {filteredScores.map((score, index) => (
          <div className="card1" key={index}>
            <p>{score.name}</p>
            <p>Score: {score.score}</p>
            <button className="delete"onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scores;

