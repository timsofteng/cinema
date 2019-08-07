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
      <Button type="primary" hideIcon text="Sign up" />
    </AuthorizationSC>
  );
};

export default Authorization;
