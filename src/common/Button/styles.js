import styled from "styled-components";

const ButtonSC = styled.button`
  //for text
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 400;
  /* Text style for "S, ign Up" */

  //for button
  width: 7em;
  height: 2em;
  border-radius: 6px;
  margin: 0.5em;
  background-color: ${props =>
    props.type === 'secondary' ? "Transparent" : "#0aaee4"};
  border: ${props => (props.border ? "2px solid" : "Transparent")};
`;

export default ButtonSC;
