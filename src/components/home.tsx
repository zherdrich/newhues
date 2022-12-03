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
    <div className="home2">
      <div className="searchBar2">
        <input
          className="search2"
          id="searchbar2"
          type="text2"
          placeholder="album name...2"
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
