import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {userReducer} from "./store/reducers";
import axiosWithAuth from "./utils/axiosWithAuth"

const store = createStore(userReducer)


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
