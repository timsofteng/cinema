import React from "react";

const initialState = {
  modal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, modal: action.payload };
    default:
      return state;
  }
}
