import React from "react";

import { ViewListSC, ButtonViewList } from "./styles";

const ViewList = () => (
  <ViewListSC>
    <ButtonViewList>
      <i className="fas fa-th-large" />
    </ButtonViewList>
    <ButtonViewList>
      <i className="fas fa-ice-cream" />
    </ButtonViewList>
  </ViewListSC>
);
export default ViewList;
