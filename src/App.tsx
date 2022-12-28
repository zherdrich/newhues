import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
} from "react-router-dom";
// import Result from "./components/result";
// import Search from "./components/search";
// import express from "express";
// import path from "path";
import { useEffect, useState } from "react";
import axios from "axios";
import TrackInfo from "./models/SpotifyInterface";

function App() {
  const CLIENT_ID = "56f79d1a09c34459a7514616e29ec33c";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState<string | null>("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState<TrackInfo>();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))!
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    console.log(token);
  }, []);
  
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchAlbum = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.get("https://accounts.spotify.com/api/token", {
      headers: {
        Authorization: `Bearer ${token}`,
        // uses bearer and the token above
      },
      params: {
        q: searchKey,
        // state from above
        type: "album", 
        // params for spotify api for artists
      },
    });
    // setArtists(data.artists.items);
    console.log(data)
  };

  // const renderArtists: any () => {
  //   return artists.map(artist => (
  //     <div key={artist.id}>
  //       {artist.images.length ? <img src={artist.images[0].url} alt=""/> : <div>No Image</div>}
  //       {artist.name}

  //     </div>
  //   ) )
  //  }




  return (
    <div className="App">
      {token ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      ) : null}

      <div className="home">
        <div className="nhtitle">n e w h u e s </div>
        <div className="nhdesc">
          new hues is a color-focused music collection app that helps you find
          and organize your favorites and soon-to-bes all in one place
        </div>
        {!token ? (
          <a
            className="start"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <div>login</div>
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        {token ? (
          <form onSubmit={searchAlbum}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}
        ;
      </div>
    </div>
  );

}

export default App;
