import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import modalInput from "../Form/Input";

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="login" component="input" type="text" placeholder="Login" />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
        <Field
          name="remember me"
          component="input"
          type="checkbox"
          text="Remember me"
        />

        <button type="submit" label="submit">
          Submit
        </button>
      </form>
    );
  }
}

SignInForm = reduxForm({ form: "login" })(SignInForm);

export default SignInForm;
