import React from "react";

import { SortingMenuSC, MenuButton } from "./styles";

const sortingTegs = [
  { id: "popular", label: "Trending" },
  { id: "top_rated", label: "Top Rated" },
  { id: "now_playing", label: "New Arrivals" },
  { id: "", label: "Trailers" },
  { id: "upcoming", label: "Coming Soon" },
  { id: "", label: "Genre" }
];

const SortingMenu = props => (
  <SortingMenuSC>
    {sortingTegs.map(teg => (
      <MenuButton
        key={teg.id}
        onClick={() => props.handleTagClick(teg.id)}
        shadowTab={props.shadowTab === teg.id ? true : false}
        text={teg.label}
      >
        {teg.label}
      </MenuButton>
    ))}
  </SortingMenuSC>
);

export default SortingMenu;
