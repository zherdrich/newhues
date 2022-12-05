import "./search.css"
import getAlbum from "../services/getAlbum";
import { useState } from "react";
import { AlbumList } from "./testarray";



export default function SearchBar() {

    const [query, setQuery] = useState("");

   
  return (
    <div className="search">
        <div className="main">


      <div className="searchBar">
        <input className="searchbar" id="searchbar" type="text" placeholder="Search..." 
        onChange={(e) => setQuery(e.target.value)}/>
        <ul className="list">
            {AlbumList.filter((album) => album.album_name.toLowerCase().includes(query.toLowerCase()) || album.artist_name.toLowerCase().includes(query.toLowerCase())).map((album) => ( <li key={album.id} className="listItem">{album.album_name} by {album.artist_name}</li> ))}
        </ul>
      </div>

        </div>
    </div>
  );
}




//Search only searches by album name, and only searches lowercase
