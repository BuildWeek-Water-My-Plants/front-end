import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Water my Plants</h1>
        <nav>
          <NavLink to="/Signup" activeClassName="selected">Signup</NavLink>
          <NavLink to="/Login" activeClassName="selected">Login</NavLink>
        </nav>
      </header>

      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}


export default App; 
 