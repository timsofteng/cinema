import React from "react";

import SortingMenuContainer from "./SortingMenu/SortingMenuContainer";
import ViewListContainer from "./ViewList/ViewListContainer";
import { TabsBarSC } from "./styles";

const TabsBar = () => (
  <TabsBarSC>
    <SortingMenuContainer />
    <ViewListContainer />
  </TabsBarSC>
);

export default TabsBar;
