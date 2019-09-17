import React from "react";

import Modal from "../../common/Modal";
import Button from "../../common/Button";

import AuthForm from "../../common/ReduxForms/Auth";
import { AuthorizationSC } from "./styles";

class Authorization extends React.Component {
  render() {
    return (
      <AuthorizationSC>
        <Button
          onClick={() => this.props.toggleModalClick("Sign In")}
          type="secondary"
          icon="search"
          iconPosition="left"
          text="Sign in"
          marginCenter
        />
        <Button
          onClick={() => this.props.toggleModalClick("Sign Up")}
          type="primary"
          text="Sign up"
          hideIcon
        />
        <Modal
          onClose={() => this.props.toggleModalClick(false)}
          isOpen={this.props.modal}
        >
          <AuthForm />
        </Modal>
      </AuthorizationSC>
    );
  }
}

export default Authorization;
