import React, { useState, useContext } from 'react';
import { ScoreContext } from '../../App';
import "./Dashboard.css"
function Dashboard() {
// use useContext hook to access addScore function from context
  const { addScore } = useContext(ScoreContext);

  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

 
   const handleScoreChange = (e) => {
    setScore(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // check if score is a number between 0 and 100
    if (isNaN(score) || score < 0 || score > 50) {
      alert('Score must be a number between 0 and 50');
    } else {
      alert('Score successfully added');
      addScore({ name, score });
      setName('');
      setScore('');
    }
  };

  return (
    <div>
      <h3 style = {{textAlign : 'center'}}>you can update the score here</h3>
      <form  className='scoresubmit' onSubmit={handleSubmit} >
        <h5 style={{ textAlign:"center"}}>Add scores</h5>
<div>
<label htmlFor="name">Name of the player: </label>
<input className='details'
         type="text"
         id="name"
         value={name}
         onChange={handleNameChange}
         required
       />
</div>
<div>
<label htmlFor="score">Additional runs: </label>
<input className='details'
         type="number"
         id="score"
         value={score}
         onChange={handleScoreChange}
         required
       />
</div>
<button className='submit'type="submit">Add Score</button>
</form>
</div>
);
}

export default Dashboard;
