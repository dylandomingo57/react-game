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

  function decideWinner() {
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

  function handleClick(choice) {
    //computer choice
    setComputerChoice(choiceDictionary[Math.floor(Math.random() * 2)])

    //plr choice
    setPlayerChoice(choice)
    decideWinner()

    // if (win) {
      
    // }
    // else if (!win) {

    // }
    // else {

    // }
  }

  return (
    <div class="container">
      <div class="titleDiv">
        <p class="paragraph"> ROCK PAPAH SCISSAHSSSSSSSS </p>
      </div>
      <div class = "opponentChoice">
        <p> {computerChoice} </p>
      </div>
      <div>
        <p> </p>
      </div>
      <div class="controlButtons">
        <Button text="Rock" onButtonClick={handleClick("Rock")}/>
        <Button text="Paper" onButtonClick={handleClick("Paper")}/>
        <Button text="Scissors" onButtonClick={handleClick("Scissors")}/>
      </div>
    </div>
  );
}

export default App;
