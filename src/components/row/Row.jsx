import React, { useEffect, useState } from "react";
import "./Row.css";

import axios from "../../axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org//t/p/original";
  //const base_url = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request)
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="posters">
        {movies.map((movie) => (
          <img
            className="poster"
            key={movie.id}
            src={`${base_url}${movie?.backdrop_path}`}
            alt={movie?.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
