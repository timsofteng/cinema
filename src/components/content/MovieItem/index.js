import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Button from "../../../common/Button";
import PlayButton from "../PlayButton";
import RaitingRatio from "../../../common/RaitingRatio";
import CoverImage from "../CoverImage";
import ViewInfo from "../ViewInfo";

import {
  MovieItemSC,
  ImageContainer,
  TitleAndRaiting,
  Title,
  Genre,
  Description
} from "./styles";

import { HoverItemSC, ScopeOnHover } from "../HoverItem/styles";

const _propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  raiting: PropTypes.number,
  genre: PropTypes.array
};

const _defaultProps = {
  title: "Film Title",
  genre: "Film genre"
};

class MovieItem extends React.Component {
  state = { viewInfo: false };

  onViewInfoClick = () => {
    this.setState({ viewInfo: true });
  };

  render() {
    console.log(this.state.viewInfo);
    return (
      <MovieItemSC>
        <HoverItemSC>
          {this.state.viewInfo ? (
            <ViewInfo src={this.props.image} alt={this.props.title} />
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
        </HoverItemSC>
        <ImageContainer>
          <CoverImage src={this.props.image} alt={this.props.title} />
        </ImageContainer>
        <Description>
          <TitleAndRaiting>
            <Title>{this.props.title}</Title>
            <RaitingRatio raiting={this.props.raiting} />
          </TitleAndRaiting>
          <Genre>{this.props.genre}</Genre>
        </Description>
      </MovieItemSC>
    );
  }
}

MovieItem.propTypes = _propTypes;
MovieItem.defaultProps = _defaultProps;

export { MovieItem };
