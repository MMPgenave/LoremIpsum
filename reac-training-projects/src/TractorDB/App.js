import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { DataProvidor } from './DataProvidor';


function App() {
    
    return (
      <DataProvidor>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>
      </DataProvidor>
    );
}

export default App;
