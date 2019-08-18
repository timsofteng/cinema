import React from "react";

import Modal from "../../common/Modal";
import Button from "../../common/Button";
import FormSignButton from "../../common/Form/FormSignButton";

import { AuthorizationSC } from "./styles";
import { ButtonsBlock } from "../../common/Form/styles";
import Form from "../../common/Form";
import Input from "../../common/Form/Input";
import Checkbox from "../../common/Form/Checkbox";

const authButtonModal = [
  {
    key: "Sign In",
    text: "Sign In"
  },

  {
    key: "Sign Up",
    text: "Sign Up"
  }
];

class Authorization extends React.Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  authButtonHandler(type) {
    this.setState({ authFormType: type });
    this.toggleModal();
  }

  signInForm = () => (
    <Form>
      <Input type="text" placeholder="Login" border />
      <Input type="text" placeholder="Password" border />
      <Checkbox>
        <input type="checkbox" />
        <span>Remember me</span>
      </Checkbox>
      <Input
        type="submit"
        value="Sing In"
        textColor="secondary"
        color="primary"
      />
    </Form>
  );
  signUpForm = () => (
    <Form>
      <Input type="text" placeholder="Username" border />
      <Input type="text" placeholder="E-mail" border />
      <Input type="text" placeholder="Password" border />
      <Checkbox inputType="checkbox" text="I agree to the Terms" />
      <Input
        type="submit"
        value="Create account"
        textColor="secondary"
        color="primary"
      />
    </Form>
  );

  render() {
    return (
      <AuthorizationSC>
        <Button
          onClick={() => this.authButtonHandler("Sign In")}
          type="secondary"
          icon="search"
          iconPosition="left"
          text="Sign in"
          marginCenter
        />
        <Button
          onClick={() => this.authButtonHandler("Sign Up")}
          type="primary"
          text="Sign up"
          hideIcon
        />
        <Modal onClose={this.toggleModal} isOpen={this.state.isOpen}>
          <ButtonsBlock>
            {authButtonModal.map(btn => (
              <FormSignButton
                onClick={() => this.setState({ authFormType: btn.key })}
                text={btn.text}
                isActive={this.state.authFormType === btn.key}
              />
            ))}
          </ButtonsBlock>
          {this.state.authFormType === "Sign In" && this.signInForm()}
          {this.state.authFormType === "Sign Up" && this.signUpForm()}
        </Modal>
      </AuthorizationSC>
    );
  }
}

export default Authorization;
