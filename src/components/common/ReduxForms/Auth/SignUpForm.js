import React from "react";
import Form from "../../Form";
import Input from "../../Form/Input";
import Checkbox from "../../Form/Checkbox";

class SignUpForm extends React.Component {
  state = { username: "", email: "", password: "" };

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
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          border
        />
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          value={this.state.email}
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

export { SignUpForm };
