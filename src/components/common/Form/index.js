import React from "react";
import { FormSC } from "./styles";

class Form extends React.Component {
  render() {
    return (
      <FormSC onSubmit={this.props.onSubmit}>{this.props.children}</FormSC>
    );
  }
}

export default Form;
