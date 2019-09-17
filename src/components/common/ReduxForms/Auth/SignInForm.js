import React from "react";
import Form from "../../Form";
import Input from "../../Form/Input";
import Checkbox from "../../Form/Checkbox";

class SignInForm extends React.Component {
  state = { login: "", password: "" };

  onFormSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
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
          onChange={this.handleChange.bind(this)}
          border
        />
        <Checkbox inputType="checkbox" text="Remember me" />
        <Input
          type="submit"
          value="Sing In"
          textColor="secondary"
          color="primary"
        />
      </Form>
    );
  }
}

export {SignInForm}