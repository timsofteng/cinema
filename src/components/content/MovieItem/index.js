import React from "react";
import PropTypes from "prop-types";

import Button from "../../common/Button";
import PlayButton from "../../common/PlayButton";
import FilmDescription from "../../common/FilmDescritption";
import CoverImage from "../CoverImage";
import ViewInfo from "../ViewInfo";

import { MovieItemSC, ImageContainer, ItemBottom } from "./styles";

import {
  HoverItemSC,
  ContentOnHover,
  Backdrop,
  ScopeOnHover
} from "../HoverItem/styles";

const _propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  raiting: PropTypes.number,
  genre: PropTypes.array,
  overview: PropTypes.string
};

const _defaultProps = {
  title: "Film Title",
  genre: "Film genre"
};

class MovieItem extends React.Component {
  render() {
    return (
      <MovieItemSC view={this.props.view}>
        {this.props.id === this.props.selectedId && (
          <ViewInfo
            onClick={() => this.props.toggleViewInfo(false)}
            src={this.props.image}
            alt={this.props.title}
            title={this.props.title}
            raiting={this.props.raiting}
            genre={this.props.genre}
            overview={this.props.overview}
          />
        )}
        <ImageContainer>
          <HoverItemSC>
            <Backdrop />
            <ContentOnHover>
              {this.props.id !== this.props.selectedId && (
                <ScopeOnHover>
                  <PlayButton text="Watch Now" />
                  <Button
                    onClick={() => this.props.toggleViewInfo(this.props.id)}
                    type="secondary"
                    text="View Info"
                    border
                    hideIcon
                  />
                </ScopeOnHover>
              )}
            </ContentOnHover>
          </HoverItemSC>
          <CoverImage src={this.props.image} alt={this.props.title} />
        </ImageContainer>
        <ItemBottom>
          <FilmDescription
            title={this.props.title}
            raiting={this.props.raiting}
            genre={this.props.genre}
          />
        </ItemBottom>
      </MovieItemSC>
    );
  }
}

MovieItem.propTypes = _propTypes;
MovieItem.defaultProps = _defaultProps;

export default MovieItem;
