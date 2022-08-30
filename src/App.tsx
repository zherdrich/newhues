import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
