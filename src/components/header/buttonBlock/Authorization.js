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

class SignInForm extends React.Component {
  state = { login: "", password: "" };

  onFormSubmit = () => {
    console.log(this.state.login);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Form>
        <Input
          type="text"
          name="login"
          placeholder="Login"
          value={this.state.login}
          onChange={this.handleChange.bind(this)}
          border
        />
        <Input
          type="text"
          name="password"
          placeholder="Password"
          value={this.state.password}
          border
        />
        <Checkbox inputType="checkbox" text="Remember me" />
        <Input
          type="submit"
          value="Sing In"
          textColor="secondary"
          color="primary"
          onSubmit={this.onFormSubmit}
        />
      </Form>
    );
  }
}
class SignUpForm extends React.Component {
  state = {};
  render() {
    return (
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
  }
}

class Authorization extends React.Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  authButtonHandler(type) {
    this.setState({ authFormType: type });
    this.toggleModal();
  }

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
                key={btn.text}
                onClick={() => this.setState({ authFormType: btn.key })}
                text={btn.text}
                isActive={this.state.authFormType === btn.key}
              />
            ))}
          </ButtonsBlock>
          {this.state.authFormType === "Sign In" && <SignInForm />}
          {this.state.authFormType === "Sign Up" && <SignUpForm />}
        </Modal>
      </AuthorizationSC>
    );
  }
}

export default Authorization;
