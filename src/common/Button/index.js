import React from "react";
import PropTypes from "prop-types";

import ButtonSC from "./styles";
import ButtonWithIcon from "./ButtonWithIcon";

const _propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  border: PropTypes.bool,
  text: PropTypes.string
};

const _defaultProps = {
  type: "primary"
};

const Button = props => (
  <ButtonSC type={props.type} border={props.border}>
    {props.text === "Sign in" ? (
      <ButtonWithIcon>
        <i className="fas fa-search"></i>
        <span>{props.text}</span>
      </ButtonWithIcon>
    ) : props.text === "+ Favorites" ? (
      <ButtonWithIcon>
        <span>{props.text}</span>
        <i className="fas fa-ellipsis-v"></i>
      </ButtonWithIcon>
    ) : (
      props.text
    )}
  </ButtonSC>
);

Button.propTypes = _propTypes;
Button.defaultProps = _defaultProps;

export default Button;
