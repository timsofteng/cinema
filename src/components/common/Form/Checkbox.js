import React from "react";

import { CheckboxSC } from "./styles";

const Checkbox = props => (
  <CheckboxSC>
    <input type={props.inputType}/>
    <span>{props.text}</span>
  </CheckboxSC>
);

export default Checkbox;
