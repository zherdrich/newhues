import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Result from './components/result';
import Search from './components/search';
import express from 'express'
import path from 'path';
import { useEffect, useState } from 'react';



function App() {

  const CLIENT_ID = "56f79d1a09c34459a7514616e29ec33c"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
  

  if (!token && hash) {
    token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))!.split("=")[1]
    
    console.log(token)
  }

}, [])



  return (
    <div className="App">
            {/* <Router>
        <Routes>
          <Route path="/" element={} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router> */}

      <div className="home">
      <div className="main">
        <div className="nhtitle">n e w  h u e s </div>
        <div className="nhdesc">
          new hues is a color-focused
          music collection app 
          that helps you find
          and organize your 
          favorites and soon-to-bes
          all in one place</div>
<a className="start" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
  <div>login</div>
</a>
      </div>
    </div>
    </div>
  );
}

export default App;
