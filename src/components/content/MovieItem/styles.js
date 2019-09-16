import styled from "styled-components";
import {  secondaryColor } from "../../../styles/constants";

const MovieItemSC = styled.div`
  height: ${props => (props.view==="no_wrap" ? "700px" : "440px")};
  width: ${props => (props.view==="no_wrap" ? "100%" : "330px")};
  margin-top: 1.5em;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ItemBottom = styled.div`
  height: 8em;
  background-color: ${secondaryColor};
  border-radius: 0 0 5px 5px;
  padding-left: 1.8em;
  padding-right: 1.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export {
  MovieItemSC,
  ImageContainer,
  Image,
    ItemBottom
};
