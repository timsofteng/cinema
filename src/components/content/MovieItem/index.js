import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Button from "../../../common/Button";
import PlayButton from "../PlayButton";
import FilmDescription from "../FilmDescritption";
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
  state = { viewInfo: false};

  onViewInfoClick = () => {
    this.setState({ viewInfo: true });
  };

  offViewInfoClick = () => {
    this.setState({ viewInfo: false });
  };



  render() {
    console.log(this.state.viewInfo);
    return (
      <MovieItemSC>
        <HoverItemSC>
          <Backdrop />
          <ContentOnHover>
            {this.state.viewInfo ? (
              <ViewInfo
                onClick={this.offViewInfoClick}
                src={this.props.image}
                alt={this.props.title}
                title={this.props.title}
                raiting={this.props.raiting}
                genre={this.props.genre}
                overview={this.props.overview}
              />
            ) : (
              <ScopeOnHover>
                <PlayButton text="Watch Now" />
                <Button
                  onClick={this.onViewInfoClick}
                  type="secondary"
                  text="View Info"
                  border
                  hideIcon
                />
              </ScopeOnHover>
            )}
          </ContentOnHover>
        </HoverItemSC>
        <ImageContainer>
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

export { MovieItem };
