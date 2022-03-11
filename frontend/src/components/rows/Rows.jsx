import React from "react";

import "./Rows.css";

import Row from "../../components/row/Row";
import requests from "../../Requests";

function Rows () {
  return (
    <section className="rows">
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  </section>
  );
}

export default Rows;