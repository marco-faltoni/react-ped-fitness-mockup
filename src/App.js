import React from 'react';
// import Context
import {ActivityProvider} from './dataContext';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// import styles
import "./style/app.scss";
//Import Pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
// import components
import Nav from "./components/Nav";

function App() {

  const location = useLocation();

  return (
    <>
    <Nav />
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/booking" exact>
          <ActivityProvider>
            <Booking/>
          </ActivityProvider>
        </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;
