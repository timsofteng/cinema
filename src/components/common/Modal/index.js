import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { ModalSC, ModalWindow, Background } from "./styles";

const _propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};

const Modal = props =>
  ReactDOM.createPortal(
    <ModalSC isOpen={props.isOpen}>
      <Background onClick={props.onClose} />
      <ModalWindow>{props.children}</ModalWindow>
    </ModalSC>,
    document.getElementById("modal")
  );

Modal.propTypes = _propTypes;

export default Modal;
