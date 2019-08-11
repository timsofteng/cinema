import React from "react";

import { SortingMenuSC, ButtonMenu } from "./styles";

const SortingMenu = () => (
  <SortingMenuSC>
    <ButtonMenu>Trending</ButtonMenu>
    <ButtonMenu>Top Rated</ButtonMenu>
    <ButtonMenu>New Arrivals</ButtonMenu>
    <ButtonMenu>Trallers</ButtonMenu>
    <ButtonMenu>Coming Soon</ButtonMenu>
    <ButtonMenu>Genre</ButtonMenu>
  </SortingMenuSC>
);

export default SortingMenu;
