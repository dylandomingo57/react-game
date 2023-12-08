import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.js';

function App() {
  return (
    <div className="container">
      <div className="titleDiv">
        <p className="paragraph"> SNAKE GAME </p>
      </div>
      <div className = "gameDiv">
        <Grid/>
      </div>
    </div>
  );
}

export default App;
