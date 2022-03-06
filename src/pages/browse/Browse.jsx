import React from "react";
import "./Browse.css";

import Button from "../../components/button/Button";
import MovieList from "../../components/movieList/MovieList";
import List from "../../components/list/List";
import Row from "../../components/row/Row";
import requests from "../../Requests";

function Browse() {
  return (
    <div className="browse-container">
      <section className="thumbnail-section">
        <div className="thumbnail">
          <img
            src="https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg"
            alt=""
          />
        </div>
        <div className="description-section">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/deiulh2-e958d335-e034-4117-8cdb-329a9a4e8562.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVpdWxoMi1lOTU4ZDMzNS1lMDM0LTQxMTctOGNkYi0zMjlhOWE0ZTg1NjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bBH1ZVe8LUIMnFR5NMxdauiz1E2-fgV4NrgX4AcNRA8"
            alt=""
          />
          <span className="description">
            Cuando Peter pide ayuda a Doctor Strange, los riesgos pasan a ser
            aún más peligrosos, obligándole a descubrir lo que realmente
            significa ser Spider-Man.
          </span>
          <div className="actions">
            <Button primary label="Play" />
            <Button secondary label="More info" />
          </div>
        </div>
      </section>
      {/*<section className="lists">
        <div className="lists-container">
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
  </section>*/}
  
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;
