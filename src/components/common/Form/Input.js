import React from "react";
import PropTypes from "prop-types";

import { InputSC } from "./styles";

const _propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool
};

const _defaultProps = {
  placeholder: "Not define"
};

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

Input.propTypes = _propTypes;
Input.defaultProps = _defaultProps;

export default Input;
