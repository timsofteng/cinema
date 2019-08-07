import React, { Fragment } from "react";
import movies from "./movies.js";
import MovieItem from "./MovieItem";

const KEY = "91eb553fee2f60308d7a2c5824313ea5";

class VideoList extends React.Component {
  renderMovies(movies) {
    return movies.results.map(item => {
      return (
        <MovieItem
          image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          title={item.title}
          raiting={item.vote_average}
          genre={["Horror, ", "Comedy, ", "Adventures"]}
          key={item.id}
        />
      );
    });
  }

  render() {
    return <Fragment>{this.renderMovies(movies)}</Fragment>;
  }
}

export default VideoList;
