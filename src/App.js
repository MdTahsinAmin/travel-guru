import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import TravelingLocation from './component/TravelingLocation/TravelingLocation';
function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>
         <Switch>
           <Route path="/home">
           <Home></Home>
           </Route>
           <Route path='/location/:locationName'>
             <TravelingLocation></TravelingLocation>
           </Route>
            <Router exact path='/'>
              <Home></Home>
            </Router>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
