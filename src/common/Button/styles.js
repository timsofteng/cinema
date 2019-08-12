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
  margin-left: ${props => props.margin_center ? "1.5em" : "0"};
  margin-right:${props => props.margin_center ? "1.5em" : "0"};
  padding-left: 0;
  padding-right: 0;
  background-color: ${props =>
    props.type === 'secondary' ? "Transparent" : "#0aaee4"};
  border: ${props => (props.border ? "1px solid" : "Transparent")};
  cursor:pointer;
`;

const ButtonWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {ButtonSC, ButtonWithIcon};
