import React from "react";

const toggleModal = (id) => {
  return {
    type: "TOGGLE_MODAL",
    payload: id
  };
};

export {toggleModal}