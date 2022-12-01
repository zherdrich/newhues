import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import getAlbum from "../services/getAlbum";
import { Search } from "../models/id-models";

export default function Home() {
  const navigate = useNavigate();
  const [albumData, setAlbumData] = useState<Search[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  function search() {
    getAlbum(searchInput).then((data) => {
      if (data) {
        setAlbumData(data);
      }
    });
  }

  return (
    <div className="home">
      <div className="searchBar">
        <input
          className="search"
          id="searchbar"
          type="text"
          placeholder="album name..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
          }}
        />
        <button onClick={search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}
