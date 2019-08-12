import styled from "styled-components";
import { contentPrimaryColor, secondaryColor } from "../../../styles/constants";

const MovieItemSC = styled.div`
  height: 400px;
  width: 330px;
  margin-top: 1.5em;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 70%;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ItemBottom = styled.div`
  height: 30%;
  background-color: ${secondaryColor};
  border-radius: 0 0 5px 5px;
  padding-left: 1.8em;
  padding-right: 1.8em;
  padding-top: 3em;
`

export {
  MovieItemSC,
  ImageContainer,
  Image,
    ItemBottom
};
