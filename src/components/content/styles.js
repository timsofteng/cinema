import styled from "styled-components";
import {contentBgColor, contentPrimaryColor, secondaryColor} from "../../styles/constants";

const ContentSC = styled.div`
  background-color: ${contentBgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const MovieItemSC = styled.div`
  height: 400px;
  width: 330px;
  margin: 20px;
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
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

const Raiting = styled.div`
  border-radius: 6px;
  border: 0.05em solid ${contentPrimaryColor};
  padding: 0.5em;
  color: ${contentPrimaryColor};
`;

const Genre = styled.div`
  color: ${contentPrimaryColor};
`;

export {
  ContentSC,
  MovieItemSC,
  Image,
  Description,
  TitleAndRaiting,
  Title,
  Raiting,
  Genre
};
