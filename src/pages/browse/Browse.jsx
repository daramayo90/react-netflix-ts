import React, { useRef, useState } from "react";

import "./Browse.css";

import Thumbnail from "../../components/thumbnail/Thumbnail";
import Rows from "../../components/rows/Rows";

function Browse() {

  return (
    <section className="browse-container">
      <Thumbnail />
      <Rows />
    </section>
  );
}

export default Browse;
