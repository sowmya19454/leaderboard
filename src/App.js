import React ,{createContext,useState} from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';
import UpcomingMatches from './components/UpcomingMatches/UpcomingMatches';
import Team from './components/Teams/Team';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Popularplayer from './components/Popularplayer/Popularplayer';
import Scores from './components/Leaderboard/Leaderboard';
export const ScoreContext = createContext();


function App() {
  
  const [scores, setScores] = useState([]);
  const addScore = (newScore) => {
    setScores([...scores, newScore]);
  };
  const removeScore = (index) => {
    const newScores = [...scores];
    newScores.splice(index, 1);
    setScores(newScores);
  };
  const scoreContextValue = { scores, addScore,removeScore };
  return (
    <div>
     <Navbar />
     <ScoreContext.Provider value={scoreContextValue}>
     <Routes>
     <Route path="/leaderboard.io" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Popularplayer" element={<Popularplayer />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Team" element={<Team />} />
        <Route path="UpcomingMatches" element={<UpcomingMatches />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Leaderboard" element={<Scores />} />
        </Routes>
        </ScoreContext.Provider>
    </div>
  );
}
  
export default App;


