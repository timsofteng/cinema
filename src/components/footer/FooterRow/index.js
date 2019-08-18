import React from "react";
import { FooterRowSC, Menu } from "./styles";
import SocialNetworks from "../../common/SocailNetworks";
import Label from "../../common/Label";

const FooterRow = () => {
  return (
    <FooterRowSC>
      <Menu>
        <span>About</span>&nbsp;
        <span>Terms of Services</span>&nbsp;
        <span>Contact</span>
      </Menu>

      <Label color="primaryColor" firstWord="moovie" secondWord="rise" />
      <SocialNetworks />
    </FooterRowSC>
  );
};

export default FooterRow;
