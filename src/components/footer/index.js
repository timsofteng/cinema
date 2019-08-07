import React from "react";
import FooterRow from "./FooterRow/";
import { FooterSC, Copyright } from "./styles";
import Label from "../../common/Label";

const Footer = () => {
  return (
    <FooterSC>
      <FooterRow />
      <Copyright>
        <span>Copyright &copy; 2017</span>&nbsp;
        <Label size="inherit"/>
        <span>. All Rights Reserved.</span>
      </Copyright>
    </FooterSC>
  );
};

export default Footer;
