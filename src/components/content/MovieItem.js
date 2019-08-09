import React from "react";
import PropTypes from "prop-types";

import {
  MovieItemSC,
  Image,
  TitleAndRaiting,
  Title,
  Raiting,
  Genre,
  Description
} from "./styles";

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

const MovieItem = props => (
  <MovieItemSC>
    <Image src={props.image} alt={props.title} />
    <Description>
      <TitleAndRaiting>
        <Title>{props.title}</Title>
        <Raiting>{props.raiting.toFixed(1)}</Raiting>
      </TitleAndRaiting>
      <Genre>{props.genre}</Genre>
    </Description>
  </MovieItemSC>
);

MovieItem.propTypes = _propTypes;
MovieItem.defaultProps = _defaultProps;

export default MovieItem;
