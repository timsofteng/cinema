import React from "react";
import Label from "../common/Label";
import AuthorizationContainer from "./buttonBlock/AuthorizationContainer";
import Index from "./description";
import Options from "./buttonBlock/Options";

import { HeaderSC, TopBar, BotomBar } from "./styles";

const Header = () => {
  return (
    <HeaderSC>
      <TopBar>
        <Label firstWord="moovie" secondWord="rise" />
        <AuthorizationContainer />
      </TopBar>
      <BotomBar>
        <Index />
        <Options />
      </BotomBar>
    </HeaderSC>
  );
};

export default Header;
