import "./search.css"
import { Search } from "../models/id-models";



export default function Search() {
  return (
    <div className="search">
        <div className="main">


      <div className="searchBar">
        <input
          className="searchbar"
          id="searchbar"
          type="text"
          placeholder="Search..."
        />
      </div>

        </div>
    </div>
  );
}
