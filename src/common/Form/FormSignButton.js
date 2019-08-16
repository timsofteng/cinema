import React from "react";

import { FormSignButtonSC } from "./styles";

const FormSignButton = props => (
  <FormSignButtonSC onClick={props.onClick} isActiv={props.isActiv}> {props.text} </FormSignButtonSC>
);

export default FormSignButton;
