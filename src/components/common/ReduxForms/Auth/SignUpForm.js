import React from "react";
import {Field, reduxForm} from "redux-form";

import Form from "../../Form";
import Input from "../../Form/Input";
import Checkbox from "../../Form/Checkbox";

class SignUpForm extends React.Component {
  // state = { username: "", email: "", password: "" };
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
          name="username"
          component={Input}
          placeholder="Username"
          border
        />
        <Field
          type="text"
          name="email"
          component={Input}
          placeholder="E-mail"
          border
        />
        <Field
          type="text"
          name="password"
          component={Input}
          placeholder="Password"
          border
        />
        <Checkbox inputType="checkbox" text="I agree to the Terms" />
        <button
          type="submit"
          textColor="secondary"
          color="primary"
        />
      </form>
    );
  }
}

SignUpForm = reduxForm ({forms: 'singUpForm'})(SignUpForm)

export default SignUpForm;
