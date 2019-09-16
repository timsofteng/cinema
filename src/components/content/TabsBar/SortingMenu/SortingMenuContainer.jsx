import React from "react";
import SortingMenu from "./SortingMenu";
import { connect } from "react-redux";
import { fetchMovies } from "../../../../store/movies/actions";

const mapStateToProps = state => {
  return {
    shadowTab: state.moviesReducer.currentTab
  };
};

const mapDispatchToProps = dispatch => {
  return { handleTagClick: id => dispatch(fetchMovies(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingMenu);
