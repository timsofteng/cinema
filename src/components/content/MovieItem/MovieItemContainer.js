import React from "react";
import MovieItem from "../MovieItem";
import { connect } from "react-redux";
import { viewInfo } from "../../../store/movies/actions";

const mapStateToProps = state => {
  return {
    view: state.moviesReducer.view,
    selectedId: state.moviesReducer.viewInfoId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleViewInfo: (id) => dispatch(viewInfo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem);
