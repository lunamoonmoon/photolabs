import React from "react";
import '../styles/PhotoSearch.scss';

const PhotoSearch = ({ handleSearch, state }) => {
  console.log(state);

  return (
    <div className="photo-search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input placeholder="Type to search" value={state.searchInput} onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
};

export default PhotoSearch;