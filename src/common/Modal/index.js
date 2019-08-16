import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { ModalSC, Background } from "./styles";
import Form from "../Form";
import Input from "../Form/Input";
import Checkbox from "../Form/Checkbox";

class Modal extends React.Component {

  render() {
    return ReactDOM.createPortal(
      <Fragment>
        <Background onClick={this.props.onClose} />
        <ModalSC>{this.props.children}</ModalSC>
      </Fragment>,
      document.getElementById("modal")
    );
  }
}

export default Modal;
