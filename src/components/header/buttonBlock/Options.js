import React from "react";
import { OptionsSC } from "./styles";
import Button from "../../../common/Button";

const Options = () => {
  return (
    <OptionsSC>
      <Button type="primary" hideIcon text="Watch Now" />
      <Button type="secondary" border="visible" hideIcon text="View Info" />
      <Button
        type="secondary"
        icon="dots"
        iconPosition="rigrh"
        text="+ Favorites"
      />
    </OptionsSC>
  );
};

export default Options;
