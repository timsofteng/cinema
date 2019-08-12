import React from "react";
import PropTypes from "prop-types";

import { ButtonSC, ButtonWithIcon } from "./styles";

const _propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOfType(["left", "right"]),
  border: PropTypes.bool,
  text: PropTypes.string.isRequired,
  hideIcon: PropTypes.bool,
  margin_center: PropTypes.bool,
  justify: PropTypes.string
};

const _defaultProps = {
  type: "primary",
  icon: "question"
};

const Button = props => (
  <ButtonSC
    onClick={props.onClick}
    type={props.type}
    border={props.border}
    margin_center={props.margin_center}

  >
    {props.hideIcon ? (
      props.text
    ) : (
      <ButtonWithIcon >
        {props.iconPosition === "left" && (
          <i className={`fas fa-${props.icon}`} />
        )}&ensp;
        <span>{props.text}</span>&ensp;
        {props.iconPosition === "right" && (
          <i className={`fas fa-${props.icon}`} />
        )}
      </ButtonWithIcon>
    )}
  </ButtonSC>
);

Button.propTypes = _propTypes;
Button.defaultProps = _defaultProps;

export default Button;
