import React from "react";

import { FormSignButtonSC } from "./styles";

const FormSignButton = props => (
  <FormSignButtonSC onClick={props.onClick} isActive={props.isActive}>
    {" "}
    {props.text}{" "}
  </FormSignButtonSC>
);

export default FormSignButton;
