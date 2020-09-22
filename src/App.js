import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import NotFoundPage from './components/notFoundPage/NotFoundPage'

function App() {
  return (

    <div className="" >
      <Route exact path="/"
        component={Home} />
      <Route path="/login" component={Login} />

    </div>


  );
}


export default App;