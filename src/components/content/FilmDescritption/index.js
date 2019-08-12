import React from "react";
import { FilmDescriptionSC, Genre, Title, TitleAndRaiting } from "./styles";
import RaitingRatio from "../../../common/RaitingRatio";

const FilmDescription = (props) => (
  <FilmDescriptionSC>
    <TitleAndRaiting>
      <Title>{props.title}</Title>
      <RaitingRatio raiting={props.raiting} />
    </TitleAndRaiting>
    <Genre>{props.genre}</Genre>
  </FilmDescriptionSC>
);

export default FilmDescription;
