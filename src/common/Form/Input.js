import React from "react";

import { InputSC } from "./styles";

const Input = props => (
  <InputSC
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    textColor={props.textColor}
    color={props.color}
    border={props.border}
  >
    {props.children}
  </InputSC>
);

export default Input;
