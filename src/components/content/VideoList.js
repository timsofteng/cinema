import React, { Fragment } from "react";
import movies from "./movies.js";
import { MovieItem } from "./MovieItem";

const VideoList = () => {

  const renderMovies = (movies) => {
    return movies.results.map(item => {
      return (
        <MovieItem
          image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          title={item.title}
          raiting={item.vote_average}
          genre={["Horror, ", "Comedy, ", "Adventures"]}
          key={item.id}
          overview={item.overview}
        />
      );
    });
  };

  return <Fragment>{renderMovies(movies)}</Fragment>;
};

export default VideoList;
