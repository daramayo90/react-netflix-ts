import React from "react";

import "./movieListMovie.css";

import { Movie } from "../../models/movie/Movie";

interface Props {
  movie: Movie;
}

function movieListMovie ({ movie }: Props) {
  return (
    <div
      className="movie"
      style={{ backgroundImage: `url(${movie.image_src})` }}
    >
      <h3 className="movie-title">Movie title</h3>
    </div>
  );
}

export default movieListMovie;
