export default function Search() {
  return (
    <div>
      <div className="searchBar">
        <input
          className="search"
          id="searchbar"
          type="text"
          placeholder="Search..."
          // onChange={(e) => {
          //   setSearchInput(e.target.value);
          // }}
          // value={searchInput}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     search();
          //   }
          // }}
        />
        {/* <button onClick={search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button> */}
      </div>
    </div>
  );
}
