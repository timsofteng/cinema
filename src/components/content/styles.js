import styled from "styled-components";
import { contentBgColor } from "../../styles/constants";

const ContentMainSC = styled.div`
  background-color: ${contentBgColor};
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
`;

const MovieListSC = styled.div`
  background-color: ${contentBgColor};
  display: flex;
  flex-direction: ${props => (props.view==="no_wrap" ? "column" : "")};
  flex-wrap: ${props => (props.view==="no_wrap" ? "nowrap" : "wrap")};
  align-items: ${props => (props.view==="no_wrap" ? "center" : "")};
  justify-content: space-between;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

export { ContentMainSC, MovieListSC };
