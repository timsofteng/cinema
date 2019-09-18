import React, { Fragment } from "react";
import { connect } from "react-redux";

import { ButtonsBlock } from "../../Form/styles";
import Form from "../../Form";
import FormSignButton from "../../Form/FormSignButton";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { toggleModal } from "../../../../store/modal/actions";

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

class AuthForm extends React.Component {
  render() {
    return (
      <Fragment>
        <ButtonsBlock>
          {authButtonModal.map(btn => (
            <FormSignButton
              key={btn.text}
              onClick={() => this.props.toggleModalClick(btn.key)}
              text={btn.text}
              isActive={this.props.modal === btn.key}
            />
          ))}
        </ButtonsBlock>
        <Form>
          {this.props.modal === "Sign In" && <SignInForm />}
          {this.props.modal === "Sign Up" && <SignUpForm />}
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modalReducer.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModalClick: id => dispatch(toggleModal(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
