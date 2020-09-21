import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import TravelingLocation from './component/TravelingLocation/TravelingLocation';
import HotelInformation from './component/HotelInformation/HotelInformation';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Login from './component/Login/Login';
import SignIn from './component/Login/SignIn';
import Contact from './component/Contact/Contact';
import Descriptin from './component/Description/Descriptin';
import Header from './component/Home/Header/Header';


export const userContext = createContext();

function App() {
  
  const [loginUser, setLoginUser] = useState({});
  
  return (
    <userContext.Provider value={[loginUser, setLoginUser]}>
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
           <PrivateRoute path='/hotelInformation'>
             <HotelInformation></HotelInformation>
           </PrivateRoute>
           <Route path='/login'>
             <Login></Login>
           </Route>
           <Route path='/signIn'>
             <SignIn></SignIn>
           </Route>
           <Route path='/description'>
             <Descriptin></Descriptin>
           </Route>
           <Route path ='/contact'>
              <Contact></Contact>
           </Route>
            <Router exact path='/'>
              <Home></Home>
            </Router>
         </Switch>
       </Router>
    </div>
  </userContext.Provider>
  );
}

export default App;
