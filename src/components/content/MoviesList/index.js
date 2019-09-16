import React, { Fragment } from "react";

import MovieItemContainer from "../MovieItem/MovieItemContainer";
import LoadSpinner from "../../common/LoadSpinner";

class MoviesList extends React.Component {

  renderMovies() {
    return this.props.movies.map((item, key) => {
      return (
        <MovieItemContainer
          image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          title={item.title}
          raiting={item.vote_average}
          genre={this.genresToText(item.genre_ids)}
          key={item.id}
          id={item.id}
          overview={item.overview}
        />
      );
    });
  }

  renderCheck() {
    return this.props.isLoading ? <LoadSpinner /> : this.renderMovies();
  }

  render() {
    return <Fragment>{this.renderCheck()}</Fragment>;
  }
}

export default MoviesList;
