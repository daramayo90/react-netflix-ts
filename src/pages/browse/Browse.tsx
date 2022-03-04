import React from "react";
import "./Browse.css";

function Browse() {
  return (
    <div className="browse-container">
      <div className="thumbnail-section">
        <div className="thumbnail" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 15%, transparent 60%), url(assets/images/popcorn.jpg)` }}></div>
        <span className="description">

        </span>
      </div>
    </div>
  );
}

export default Browse;