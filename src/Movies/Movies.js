import React from "react";
import "./Movies.css";

const movies = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div>
      <div
        className="movie-contaier"
        onClick={() => {
          props.setmovieSelected(imdbID);
        
        }}
      >
        <img className="movie-poster" src={Poster} alt={Title} />
        <div className="movie-name">{Title}</div>
        <div className="movie-info">
          <span className="info">Year:{Year}</span>
          <span className="info">Type:{Type}</span>
        </div>
      </div>
    </div>
  );
};

export default movies;
