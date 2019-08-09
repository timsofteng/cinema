import React from "react";
import PropTypes from "prop-types";

import { LabelSC, ThickText, ThinText } from "./styles";
import { primaryColor } from "../../styles/constants";

const _propTypes = {
  sizeInherit: PropTypes.bool,
  color: PropTypes.string,
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired
};

const _defaultProps = {
  color: `${primaryColor}`
};

const Label = props => {
  return (
    <LabelSC sizeInherit={props.sizeInherit} color={props.color}>
      <ThickText>{props.firstWord}</ThickText>
      <ThinText>{props.secondWord}</ThinText>
    </LabelSC>
  );
};

Label.propTypes = _propTypes;
Label.defaultProps = _defaultProps;

export default Label;
