import React from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import {
  addPlant,
  getPlantByID,
  requestSignup,
  requestLogin,
  updatePlant,
  deletePlant,
  updateUser,
  deleteUser,
  updatePlantWater,
} from "./store/actions";

// components
import Login from './components/Login'
import Signup from './components/Signup'
import PlantList from './components/PlantList'
import Plant from './components/Plant'
import AddPlant from './components/AddPlant'

export default function App(props) {
  return (
    <div className="App">
      <header>
        <h1>Water my Plants</h1>
        <nav>
          <NavLink to="/Signup" activeClassName="selected">Signup</NavLink>
          <NavLink to="/Login" activeClassName="selected">Login</NavLink>
          <NavLink to="/PlantList" activeClassName="selected">Plant List</NavLink>
          <NavLink to="/AddPlant" activeClassName="selected">Add Plant</NavLink>
        </nav>
      </header>

      <Switch>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path="/PlantList">
          <PlantList />
        </Route>
        <Route path="/AddPlant">
          <AddPlant />
        </Route>
        <Route path="/Plant">
          <Plant />
        </Route>
      </Switch>
    </div>
  );
}
 