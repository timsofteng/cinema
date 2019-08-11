import styled from "styled-components";
import {secondaryColor} from "../../styles/constants";

const ButtonSC = styled.button`
  //for text
  color: ${secondaryColor};
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  /* Text style for "S, ign Up" */

  //for button
  width: 7em;
  height: 2em;
  border-radius: 6px;
  margin-left: 0.5em;
  margin-right: 0.5em;
  background-color: ${props =>
    props.type === 'secondary' ? "Transparent" : "#0aaee4"};
  border: ${props => (props.border ? "1px solid" : "Transparent")};
`;

const ButtonWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {ButtonSC, ButtonWithIcon};
