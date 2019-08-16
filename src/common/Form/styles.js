import styled from "styled-components";

import {
  primaryColor,
  secondaryColor,
  contentTabsBarColor
} from "../../styles/constants";

const FormSC = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-size: 18px;
`;

const InputSC = styled.input`
  font-size: 18px;
  width: 100%;
  height: 2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: ${props => (props.border ? "1px Solid black" : "Transparent")};
  border-radius: 6px;
  background: ${props => (props.color === "primary" ? primaryColor : "")};
  color: ${props => (props.textColor === "secondary" ? secondaryColor : "")};
`;

const CheckboxSC = styled.div`
  display: flex;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormSignButtonSC = styled.button`
  font-size: 18px;
  width: 50%;
  height: 2em;
  border: Transparent;
  //background-color: Transparent;
  color: black;
  background-color: ${props => (props.isActive ? "white" : "gray")};
`;

export { FormSC, ButtonsBlock, InputSC, CheckboxSC, FormSignButtonSC };
