import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
// import { width } from "@mui/system";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);

        const request = await axios.get(fetchUrl);
        console.log(request);

        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(``);
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search);
          console.log(urlparams);
          console.log(urlparams.get(`v`));
          console.log(urlparams.get(`v`));
        }
      );
    }
  };
  const opts = {
    height: `390`,
    width: "100%",
    playervars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: `40px` }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};
export default Row;
