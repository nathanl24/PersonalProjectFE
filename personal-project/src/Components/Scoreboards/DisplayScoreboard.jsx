import React from 'react';
import Scoreboard from './Scoreboard';

const DisplayScoreboard = () => {
  return (
    <div className="app">
      <div className="scoreboard-container">
        <Scoreboard title="Dinas Powys" />
        <br/>
        <br/>
        <Scoreboard title="Opposition" />
      </div>
    </div>
  );
};

export default DisplayScoreboard;
