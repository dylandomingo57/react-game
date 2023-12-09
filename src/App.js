import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.js';
import DirectionButton from './components/directionButton';

function App() {
  return (
    <div class="container">
      <div class="titleDiv">
        <p class="paragraph"> SNAKE GAME </p>
      </div>
      <div class = "gameDiv">
        <Grid/>
      </div>
      <div class="controlButtons">
        <DirectionButton direction="up" text="↑"/>
        <br></br>
        <DirectionButton direction="left" text="←"/>
        <DirectionButton direction="down" text="↓"/>
        <DirectionButton direction="right" text="→"/>
      </div>
    </div>
  );
}

export default App;
