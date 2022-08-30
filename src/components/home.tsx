import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <div className="welcome">welcome to</div>
      <div className="title"> newhues</div>
      <div className="colorblock">||||</div>
      <button className="enter">enter</button>
    </div>
  );
}
