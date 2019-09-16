import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import MovieItemContainer from "../MovieItem/MovieItemContainer";
import LoadSpinner from "../../common/LoadSpinner";
import MoviesList from "./index";
import {
  fetchMovies,
  fetchGenres,
  loadPage
} from "../../../store/movies/actions";
import { MovieListSC } from "../styles";
import { idToText } from "../../../utils";

class MoviesListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.moviesItemRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchGenres();
    this.props.fetchMovies("popular");
  }

  renderItems(items) {
    return items.map(item => (
      <MovieItemContainer
        image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        title={item.title}
        raiting={item.vote_average}
        genre={idToText(item.genre_ids, this.props.genres)}
        key={item.id}
        id={item.id}
        overview={item.overview}
      />
    ));
  }

  handleScroll = () => {
    this.props.loadPage(
      this.props.currentTab,
      this.props.currentPage + 1,
      true //reset
    );
  };
  renderCheck() {
    return this.props.isLoading && <LoadSpinner />;
  }
  render() {
    return (
      <div>
        <InfiniteScroll
          element={MovieListSC}
          pageStart={0}
          initialLoad={false}
          loadMore={this.handleScroll}
          hasMore={true}
          loader={this.renderCheck()}
        >
          {this.renderItems(this.props.movies)}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = ({
  moviesReducer: { movies, currentPage, currentTab, isLoading, genres, view }
}) => ({
  movies,
  currentPage,
  currentTab,
  isLoading,
  genres,
  view
});

export default connect(
  mapStateToProps,
  { fetchMovies, fetchGenres, loadPage }
)(MoviesListContainer);
