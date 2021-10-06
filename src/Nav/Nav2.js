import React from "react";
import "./Nav.css";

const Nav2 = (props) => {
  return (
    <div className="navContainer">
      <div className="formContainer">
        <input
          placeholder="Search Movie"
          onChange={props.onType}
          className="searchInput"
          value={props.searchText}
          type="text"
        />
        {/* <button onType={() => props.searchMovie()} className="searchBtn">
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default Nav2;
