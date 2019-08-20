import styled from "styled-components";

import { primaryColor, secondaryColor } from "../../../styles/constants";

const PlayButtonSC = styled.button`
  color: ${secondaryColor};
  //for text
  color: ${secondaryColor};
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;

  //for button
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 7em;
  border-radius: 6px;
  background-color: Transparent;
  border: Transparent;
`;

const PlayIcon = styled.div`
  background-color: ${primaryColor};
  border-radius: 50%;
  height: 2.5em;
  width: 2.5em;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 9px;
}


`;

export { PlayButtonSC, PlayIcon };
