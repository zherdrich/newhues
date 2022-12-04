import "./search.css"
import getAlbum from "../services/getAlbum";
import { useState } from "react";



export default function SearchBar() {

    const [query, setQuery] = useState("");



  return (
    <div className="search">
        <div className="main">


      <div className="searchBar">
        <input className="searchbar" id="searchbar" type="text" placeholder="Search..." 
        onChange={(e) => setQuery(e.target.value)}/>
        <ul className="list">
            {getAlbum.map((album) => ( <li className="listItem">{search.query}</li> )) }
        </ul>
      </div>

        </div>
    </div>
  );
}
