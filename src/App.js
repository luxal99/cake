import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import Home from './components/home/Home'

function App() {
  return (

    <div className="">
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </div>


  );
}


export default App;
