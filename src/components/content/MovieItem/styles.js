import styled from "styled-components";
import { contentPrimaryColor, secondaryColor } from "../../../styles/constants";

const MovieItemSC = styled.div`
  height: 400px;
  width: 330px;
  margin-top: 1.5em;
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

const Description = styled.div`
  height: 30%;
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  padding-left: 1.8em;
  padding-right: 1.8em;
`;

const TitleAndRaiting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 19px;
  font-family: "Helvetica Neue - Bold", Arial, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 210px;
  height: 1em;
`;

const Genre = styled.div`
  color: ${contentPrimaryColor};
`;

export {
  MovieItemSC,
  ImageContainer,
  Image,
  Description,
  TitleAndRaiting,
  Title,
  Genre
};
