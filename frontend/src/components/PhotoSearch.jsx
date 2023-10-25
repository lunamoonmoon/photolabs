import React from "react";
import '../styles/PhotoSearch.scss';

const PhotoSearch = ({ photoData }) => {

  return (
    <div className="photo-search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default PhotoSearch;