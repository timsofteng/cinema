import React from "react";
import Button from "../../../common/Button";
import { AuthorizationSC } from "./styles";

const Authorization = () => {
  return (
    <AuthorizationSC>
      <Button
        type="secondary"
        icon="search"
        iconPosition="left"
        text="Sign in"
      />
      <Button type="primary" text="Sign up" hideIcon />
    </AuthorizationSC>
  );
};

export default Authorization;
