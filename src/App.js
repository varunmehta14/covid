import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./component/Data";
import Home from "./component/Home";

import { Button } from 'react-bootstrap';
import  Chart from './component/Chart';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/table' component={Data}/>
          <Route path='/chart' component={Chart}/>
       </Switch>
       </Router>
      
     
    </div>
  );
}

export default App;
