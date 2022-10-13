import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Home() {

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState<string>("");




    function search() {
      //todo: add calories to this request
      getRecipes(searchInput).then((data) => {
        if (data) {
          setMealData(data);
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
