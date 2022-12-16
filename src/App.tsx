import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Result from './components/result';
import Search from './components/search';
import { useState } from 'react';
import express from 'express'
import path from 'path';

//experimentation begins on line 25


function App() {

  require('dotenv').config();
  const app = express();

  

  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../components/home.tsx'))
  // }) 

  // app.get('/auth', (req, res) => {
  //   res.redirect(
  //     `https://discogs.com/oauth/authorize?oauth_token=${}`
  //   )
  // })




  // const CLIENT_ID = "xGjFKCRurYCzGXLXddxG"
  // const REDIRECT_URI = "http://localhost:3000"
  // const AUTH_ENDPOINT = "https://www.discogs.com/oauth/authorize"
  // const RESPONSE_TYPE = "token"
  // const [token, setToken] = useState("")
  // const [searchKey, setSearchKey] = useState("")
  // const [artists, setArtists] = useState([])
  // const [data, setData] = useState([])
  // const [item]





  return (
    <div className="App">
            <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>


      <div className='loginpage'>
      {!token ?
      <a className='logintonewhues' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>loginToSongify</a>
      : <button className='logoutButton' onClick={logout}><CgLogIn/></button>}
      {token ? <form onSubmit={searchArtists}>

      </form> : <h1></h1>}
  </div>
    </div>
  );
}

export default App;
