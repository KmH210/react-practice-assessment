import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Coke from './components/Coke';
import Pepsi from './components/Pepsi';
import OtherDrink from "./components/OtherDrink"
import StarShips from './components/StarShipDisplay';

function App() {
  return (
    <div className="App">
     <Router>
       <header>
        <Link to="/coke"><h3>Coke</h3></Link>
        <Link to="/pepsi"><h3>Pepsi</h3></Link>
        <Link to="/other/Faygo Cola"><h3>Faygo Cola</h3></Link>
        <Link to="/other/Vernors"><h3>Vernors</h3></Link>
        <Link to ="/starshipdisplay"><h3>Star Ships</h3></Link>
       </header>
       <Switch>
         <Route path ="/coke">
           <Coke/>
         </Route>
         <Route path ="/pepsi">
           <Pepsi/>
         </Route>
         <Route path ="/other/:drink">
           <OtherDrink/>
         </Route>
         <Route path ="/starshipdisplay">
           <StarShips/>
         </Route>
       </Switch>
     </Router>

    </div>
  );
}

export default App;
