import styled from "styled-components";
import { contentPrimaryColor } from "../../../styles/constants";

const FilmDescriptionSC = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 0 5px 5px;
`;

const TitleAndRaiting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
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

export { FilmDescriptionSC, TitleAndRaiting, Title, Genre };
