import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import components
import Game1 from "../Game1/Game1";
import Game2 from "../Game2/Game2";
import Game3 from "../Game3/Game3";
import Game4 from "../Game4/Game4";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Solo Project</h1>
        
        <Link to='/game1'>
          <span>Game 1</span>
        </Link>

        <Link to='/game2'>
          <span>Game 2</span>
        </Link>

        <Link to='/game3'>
          <span>Game 3</span>
        </Link>

        <Link to='/game4'>
          <span>Game 4</span>
        </Link>


        <Route path='/' exact>
          <h2>Home Page</h2>
        </Route>

        <Route path='/game1' exact>
          <Game1 />
        </Route>

        <Route path="/game2" exact>
          <Game2 />
        </Route>

        <Route path="/game3" exact>
          <Game3 />
        </Route>

        <Route path="/game4" exact>
          <Game4 />
        </Route>

      </header>
    </div>
    </Router>
  );
}

export default App;
