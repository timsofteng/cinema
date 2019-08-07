import React from "react";
import {
  MovieItemSC,
  Image,
  TitleAndRaiting,
  Title,
  Raiting,
  Genre,
  Description
} from "./styles";

const MovieItem = props => (
  <MovieItemSC>
    <Image src={props.image} />
    <Description>
      <TitleAndRaiting>
        <Title>{props.title}</Title>
        <Raiting>{props.raiting.toFixed(1)}</Raiting>
      </TitleAndRaiting>
      <Genre>{props.genre}</Genre>
    </Description>
  </MovieItemSC>
);
export default MovieItem;
