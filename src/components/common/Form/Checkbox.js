import React from "react";
import PropTypes from "prop-types";

import { CheckboxSC } from "./styles";

const _propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

const _defaultProps = {};

const Checkbox = props => (
  <CheckboxSC>
    <input type={props.inputType} />
    <span>{props.text}</span>
  </CheckboxSC>
);

Checkbox.propTypes = _propTypes;
Checkbox.defaultProps = _defaultProps;

export default Checkbox;
