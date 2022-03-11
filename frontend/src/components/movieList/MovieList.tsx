import React from "react";

import './MovieList.css';

import movies from "../../data/movies/movies.json"

import LeftArrow from "@material-ui/icons/ChevronLeft"
import RightArrow from "@material-ui/icons/ChevronRight"

import MovieListMovie from "../../components/movieListMovie/movieListMovie"

function MovieList () {
    return (
        <div className="movies-list-container">
            <h2 className="title">Trending Now</h2>
            <div className="movies">
                <section id="section-1">
                    <a className="previous" href="#section-2"><LeftArrow /></a>

                    {movies.slice(0,5).map((movie, index) => (
                        <MovieListMovie movie={movie} />
                    ))}

                    <a className="next" href="#section-2"><RightArrow /></a>
                </section>

                <section id="section-2">
                    <a className="previous" href="#section-1"><LeftArrow /></a>

                    {movies.slice(5,movies.length).map((movie, index) => (
                        <MovieListMovie movie={movie} />
                    ))}

                    <a className="next" href="#section-1"><RightArrow /></a>
                </section>
            </div>
        </div>
    )
}

export default MovieList;