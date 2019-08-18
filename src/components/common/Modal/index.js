import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { ModalSC, ModalWindow, Background } from "./styles";

const Modal = props =>
  ReactDOM.createPortal(
    <ModalSC isOpen={props.isOpen}>
      <Background onClick={props.onClose}/>
      <ModalWindow>{props.children}</ModalWindow>
    </ModalSC>,
    document.getElementById("modal")
  );

export default Modal;
