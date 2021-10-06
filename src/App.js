import "./App.css";
import { useState } from "react";
// import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import Nav2 from "./Nav/Nav2";

function App() {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const [timeoutID, setTimeoutID] = useState();
  const [movieData, setMovieData] = useState({});
  const [movieSelected, setmovieSelected] = useState();

  const searchMovie = async (moviesser) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${moviesser}`
    );
    const data = await response.json();
    // console.log(data);
    setMovieData(data.Search);
    setShow(true);
  };
  const onType = (event) => {
    setmovieSelected("");
    clearTimeout(timeoutID);
    setSearchText(event.target.value);
    const timeout = setTimeout(() => searchMovie(event.target.value), 500);
    setTimeoutID(timeout);
  };

  return (
    <div className="App">
      <Nav2 searchMovie={searchMovie} searchText={searchText} onType={onType} />
      {movieSelected && (
        <Main
          movieSelected={movieSelected}
          setmovieSelected={setmovieSelected}
          setShow={setShow}
          show={show}
        />
      )}
      {/* <Nav searchMovie={searchMovie} setSearchText={setSearchText} /> */}
      <div className="listed-movies">
        {movieData?.length
          ? movieData.map((movie, index) => (
              <Movies
                key={index}
                movie={movie}
                movieSelected={movieSelected}
                setmovieSelected={setmovieSelected}
              />
            ))
          : "Movie not Available "}
      </div>
    </div>
  );
}

export default App;
