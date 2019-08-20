import React, { Fragment } from "react";
import axios from "axios";

import KEY from '../../config'
import { connect } from "react-redux";
import { MovieItem } from "./MovieItem";


class VideoList extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/22?api_key=${KEY}&language=en-US`
      )
      .then(response => console.log(response));
  }

  renderMovies() {
    return this.props.movies.map(item => {
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
  }

  render() {
    return <Fragment>{this.renderMovies()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return { movies: state.results };
};

export default connect(mapStateToProps)(VideoList);
