import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Button from './components/button';
import React from 'react';

function App() {

  const choiceDictionary = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
  }

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [win, setWin] = useState(null);

  const decideWinner = () => {
    if (playerChoice == "Rock") { 
      if (computerChoice == "Paper") { setWin(false) }
      else if (computerChoice == "Scissors") { setWin(true) }
    }
    else if (playerChoice == "Paper") {
      if (computerChoice == "Rock") { setWin(true) }
      else if (computerChoice == "Scissors") { setWin(false) }
    }
    else if (playerChoice == "Scissors") {
      if (computerChoice == "Rock") { setWin(true) }
      else if (computerChoice == "Paper") { setWin(false) }
    }
    else if (playerChoice == computerChoice) {
      setWin(null)
    }
  }

  const handleClick = (e) => {
    //computer choice
    setComputerChoice(choiceDictionary[Math.floor(Math.random() * 3)])

    //plr choice
    setPlayerChoice(e.target.textContent)
    console.log(playerChoice) 
    console.log(computerChoice)
  }

  return (
    <div class="container">
      <div class="titleDiv">
        <p class="paragraph"> ROCK PAPAH SCISSAHSSSSSSSS </p>
      </div>
      <div class = "opponentChoice">
        <p> Opponent Chooses: {computerChoice} </p>
      </div>
      <div>
        <p> </p>
      </div>
      <div class="controlButtons">
        <button class="Rock" onClick={handleClick}>Rock</button>
        <button class="Paper" onClick={handleClick}>Paper</button>
        <button class="Scissors" onClick={handleClick}>Scissors</button>
      </div>
      <div class="result">
        <button onClick={decideWinner}>Check Who Won</button>
        <p>
          {win ? "you win!!!" : "LLLLLLL"}
        </p>
      </div>
    </div>
  );
}

export default App;
