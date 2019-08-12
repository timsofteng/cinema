import React from "react";
import { OptionsSC } from "./styles";
import Button from "../../../common/Button";

const Options = () => {
  return (
    <OptionsSC>
      <Button type="primary" text="Watch Now" hideIcon />
      <Button type="secondary" text="View Info" border hideIcon   margin_center/>
      <Button
        type="secondary"
        icon="ellipsis-v"
        iconPosition="right"
        text="+ Favorites"
      />
    </OptionsSC>
  );
};

export default Options;
