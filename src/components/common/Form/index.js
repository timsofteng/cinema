import React from "react";
import { FormSC } from "./styles";

class Form extends React.Component {

  render() {
    return <FormSC>{this.props.children}</FormSC>;
  }
}

export default Form;
