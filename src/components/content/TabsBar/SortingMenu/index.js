import React from "react";

import { SortingMenuSC, MenuButton } from "./styles";

const sortingTegs = [
  "Trending",
  "Top Rated",
  "New Arrivals",
  "Trallers",
  "Coming Soon",
  "Genre"
];

const SortingMenu = () => (
  <SortingMenuSC>
    {sortingTegs.map(teg => (
      <MenuButton>{teg}</MenuButton>
    ))}
  </SortingMenuSC>
);

export default SortingMenu;
