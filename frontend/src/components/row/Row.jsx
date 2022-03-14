import React, { useEffect, useState, useRef } from "react";

import "./Row.css";

import axios from "../../axios";
import RowItem from "../rowItem/RowItem";

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

function Row({ title, fetchUrl }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, []);

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${350 + distance}px)`;
    }
    if (direction === "right" && slideNumber < movies.length) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-370 + distance}px)`;
    }
  };

  return (
    <div className="row">
      <h4 className="title">{title}</h4>

      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />

        <div className="container" ref={listRef}>
          <RowItem fetchUrl={fetchUrl} />
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
