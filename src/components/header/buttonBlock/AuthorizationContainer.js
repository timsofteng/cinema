import React from "react";
import { connect } from "react-redux";

import Authorization from "./Authorization";
import { toggleModal } from "../../../store/modal/actions";

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
)(Authorization);
