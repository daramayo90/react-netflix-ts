import React, { useEffect, useState, useRef } from "react";
import "./Row.css";

import axios from "../../axios";

import "../../components/list/List.css";

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org//t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="wrapper posters" ref={listRef}>
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
        {movies.map((movie) => (
          <img
            className="poster"
            key={movie.id}
            src={`${base_url}${movie?.backdrop_path}`}
            alt={movie?.name}
          />
        ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
