import React from "react";
import Label from "../../common/Label";
import Authorization from "./buttonBlock/Authorization";
import Index from "./description";
import Options from "./buttonBlock/Options";

import { HeaderSC, TopBar, BotomBar } from "./styles";

const Header = () => {
  return (
    <HeaderSC>
      <TopBar>
        <Label firstWord="moovie" secondWord="rise" />
        <Authorization />
      </TopBar>
      <BotomBar>
        <Index />
        <Options />
      </BotomBar>
    </HeaderSC>
  );
};

export default Header;
