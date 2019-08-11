import styled from "styled-components";
import { contentBgColor } from "../../styles/constants";

const ContentMain = styled.div`
  background-color: ${contentBgColor};
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
`;

const MovieList = styled.div`
  background-color: ${contentBgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

export { ContentMain, MovieList };
