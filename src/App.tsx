import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Result from './components/result';
import Search from './components/search';
import { useState } from 'react';

//experimentation begins on line 25


function App() {


  const CLIENT_ID = "56f79d1a09c34459a7514616e29ec33c"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = " authorize"
  const RESPONSE_TYPE = "token"
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [data, setData] = useState([])





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

      <a className='logintosongify' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>loginToSongify</a>

  </div>
    </div>
  );
}

export default App;
