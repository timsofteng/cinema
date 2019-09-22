import React from "react";

import { Field, reduxForm } from "redux-form";
import Input from "../../Form/Input";
import Checkbox from "../../Form/Checkbox";

class SignInForm extends React.Component {
  // state = { login: "", password: "" };
  //
  // onFormSubmit = event => {
  //   event.preventDefault();
  // };
  //
  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    const { handleSubmit } = this.props;

    const submit = values => console.log(values);
    return (
      <form onSubmit={handleSubmit(submit)}>
        <Field
          type="text"
          component={Input}
          name="login"
          placeholder="Login"
          border
        />
        <Field
          type="text"
          component={Input}
          name="password"
          placeholder="Password"
          border
        />
        <Field component={Checkbox} inputType="checkbox" text="Remember me" />
        <button type="submit" color="primary" />
      </form>
    );
  }
}

SignInForm = reduxForm({ form: "signInForm" })(SignInForm);

export default SignInForm;
