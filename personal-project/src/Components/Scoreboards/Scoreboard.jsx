import React, { useState } from 'react';


const Scoreboard = ({ title }) => {
  const [score, setScore] = useState(0);

  const handleIncrement = (points) => {
    setScore(score + points);
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div className="scoreboard">
      <h2>{title}</h2>
      <div className="score">{score}</div>
      <div className="buttons">
        <button onClick={() => handleIncrement(2)}>Conversion</button>
        <button onClick={() => handleIncrement(3)}>Penalty</button>
        <button onClick={() => handleIncrement(3)}>Drop Goal</button>
        <button onClick={() => handleIncrement(5)}>Try</button>
        <button onClick={() => handleIncrement(7)}>Penalty Try</button>
        <button onClick={handleReset}>Game Finished</button>
      </div>
    </div>
  );
};

export default Scoreboard;
