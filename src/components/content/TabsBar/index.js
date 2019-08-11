import React from "react";

import SortingMenu from './SortingMenu';
import ViewList from './ViewList'
;import { TabsBarSC } from "./styles";

const TabsBar = () => (
  <TabsBarSC>
    <SortingMenu />
    <ViewList/>
  </TabsBarSC>
);

export default TabsBar;
