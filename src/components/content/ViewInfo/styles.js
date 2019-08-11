import styled from "styled-components";
import { itemHoverBgColor } from "../../../styles/constants";
import CoverImage from "../CoverImage";

const ViewInfoSC = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  color: white;
  background-image: url("https://image.tmdb.org/t/p/w500/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg");
`;

// const ViewInfoContentSC = styled.div`
// position: absolute;
// background-color: ${itemHoverBgColor};
// height: 100%;
// width: 100%;
// `

export { ViewInfoSC };
