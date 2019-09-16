import React from "react";
import { connect } from "react-redux";

import TabsBar from "./TabsBar";
import MovieListContainer from "./MoviesList/MoviesListContainer";

import { ContentMainSC, MovieListSC } from "./styles";

const Content = props => {
  return (
    <ContentMainSC>
      <TabsBar />
      <MovieListSC view={props.view}>
        <MovieListContainer />
      </MovieListSC>
    </ContentMainSC>
  );
};

const mapStateToProps = state => {
  return {
    view: state.moviesReducer.view,
    isLoading: state.moviesReducer.isLoading
  };
};

export default connect(mapStateToProps)(Content);
