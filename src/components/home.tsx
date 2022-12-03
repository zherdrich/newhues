import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import getAlbum from "../services/getAlbum";
import { Search } from "../models/id-models";

export default function Home() {
  // const navigate = useNavigate();
  // const [albumData, setAlbumData] = useState<Search[]>([]);
  // const [searchInput, setSearchInput] = useState<string>("");

  // function search() {
  //   getAlbum(searchInput).then((data) => {
  //     if (data) {
  //       setAlbumData(data);
  //     }
  //   });
  // }


  return (
    <div className="home">
      <div className="main">
        <div className="nhtitle">new hues</div>
        <div className="nhdesc">
          new hues is a color-focused
          music collection app 
          that helps you find
          and organize all your 
          favorites and soon-to-bes
          in one place</div>
<a className="start" href="/search">
  <div>get started</div>
</a>
      </div>
    </div>
  );
}
