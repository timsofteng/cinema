import React from "react";
import ViewList from "../ViewList";
import { connect } from "react-redux";
import { switchView } from "../../../../store/movies/actions";

const mapStateToProps = state => {
  return { view: state.moviesReducer.view };
};

const mapDispatchToProps = dispatch => {
  return { handleIconClick: id => dispatch(switchView(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewList);
