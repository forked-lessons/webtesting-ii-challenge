import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);
  const resetCount = () => {
    setStrikes(0);
    setBalls(0);
    setFouls(0);
  };
  const resetGame = () => {
    setHits(0);
    resetCount();
  };
  const incrementHits = () => {
    setHits(hits + 1);
    resetCount();
  };
  const incrementBalls = () => {
    if (balls === 3) {
      resetCount();
    } else {
      setBalls(balls + 1);
    }
  };
  const incrementStrikes = () => {
    if (strikes === 2) {
      resetCount();
    } else {
      setStrikes(strikes + 1);
    }
  };
  const incrementFouls = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };
  return (
    <div>
      <Display balls={balls} strikes={strikes} hits={hits} fouls={fouls} />
      <button data-testid="ballButton" onClick={() => incrementBalls()}>
        Add Ball
      </button>
      <button data-testid="strikeButton" onClick={() => incrementStrikes()}>
        Add Strike
      </button>
      <button data-testid="foulButton" onClick={() => incrementFouls()}>
        Add Foul
      </button>
      <button data-testid="hitButton" onClick={() => incrementHits()}>
        Add Hit
      </button>
      <button data-testid="resetButton" onClick={() => resetCount()}>
        Reset
      </button>
      <button data-testid="resetGameButton" onClick={() => resetGame()}>
        Reset Game
      </button>
    </div>
  );
};

export default Dashboard;
