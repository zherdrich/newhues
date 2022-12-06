import "./search.css"
import getAlbum from "../services/getAlbum";
import { useEffect, useState } from "react";
import { AlbumList } from "./testarray";
import { stringify } from "querystring";
import { Results, Search } from "../models/id-models";



export default function SearchBar() {

    const apiKey1 = process.env.REACT_APP_API_KEY || "";

    const [query, setQuery] = useState("");
    const [album, setAlbum] = useState<Search[]>([]);
    useEffect(() => {
    getAlbum(query, apiKey1).then(data => {
    
        data.results.forEach((index) => {
            setAlbum(
                [...album,{
                    title: index.title,
                    genre: index.genre.filter((x) => x),
                    year: index.year,
                    id: index.id,
                    cover_image: index.cover_image}]
            )
        })
    })
},[query])
  return (
    <div className="search">
        <div className="main">


      <div className="searchBar">
        <input className="searchbar" id="searchbar" type="text" placeholder="Search..." 
        onChange={(e) => setQuery(e.target.value)}/>
        <ul className="list">
            {album.map((result) => 
            <li>
                <p>{result.title}</p>
                <p>{result.genre}</p>
                <p>{result.year}</p>
                <img src={result.cover_image} alt="album cover" />
            </li>

            )}
        </ul>
      </div>

        </div>
    </div>
  );
}




//Search only searches by album name, and only searches lowercase
