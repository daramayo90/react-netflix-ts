import React from "react";
import "./Browse.css";

import Button from "../../components/button/Button";
import MovieList from "../../components/movieList/MovieList"
import List from "../../components/list/List"

function Browse() {
  return (
    <div className="browse-container">
      <div className="thumbnail-section">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 15%, transparent 60%), url(assets/images/popcorn.jpg)`,
          }}
        ></div>
        <div className="description-section">
          <span className="description">I'm the description of the movie</span>
          <div className="actions">
            <Button primary label="Play" />
            <Button secondary label="More info" />
          </div>
        </div>
      </div>

      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Browse;
