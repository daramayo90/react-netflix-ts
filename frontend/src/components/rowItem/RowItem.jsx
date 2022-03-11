import React, { useEffect, useState } from "react";

import "./RowItem.css";

import axios from "../../axios";

function RowItem ({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org//t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      {movies.map((movie) => (
        <img
          className="poster"
          key={movie.id}
          src={`${base_url}${movie?.backdrop_path}`}
          alt={movie?.name}
        />
      ))}
    </>
  );
}

export default RowItem;
