import React from "react";
import { useState, useEffect } from "react";

import "./Main.css";

const Main = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieSelected } = props;
  const selectedMovie = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&i=${movieSelected}`
    );
    const data=await response.json();

    setMovieInfo(data);
      //  console.log(movieInfo);


    
  };
  useEffect(() => {
    selectedMovie();
  }, [movieSelected]);
  
  const imgStyles = {
    backgroundImage: `url(${movieInfo?.Poster})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "300px",
    width: "200px",
  };

  return (
    <div className="mainContainer">
      {/* {props.show && ( */}
        <div className="modalContainer">
          <div className="infoContainer">
            <div style={imgStyles}></div>
            <div className="infoText">
              <h1 className="infoTextItem">{movieInfo?.Title}</h1>
              <h3 className="infoTextItem">Actors: {movieInfo?.Actors}</h3>
              <h3 className="infoTextItem">Year: {movieInfo?.Year}</h3>
              <h3 className="infoTextItem">Released: {movieInfo?.Released}</h3>
              <h3 className="infoTextItem">Genre: {movieInfo?.Genre}</h3>

              <h1>Ratings</h1>

              {movieInfo?.Ratings.map((movie) => (
                <div className="ratingsContainer">
                  <p>
                    {movie.Source} -{" "}
                    <span className="rating"> {movie.Value} </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="btnContainer">
            <button
              className="searchBtn"
              onClick={() =>props.setmovieSelected()
}
            >
              Close
            </button>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Main;
