import React from "react";

import { ViewListSC, ButtonViewList } from "./styles";

const ViewList = (props) => (
  <ViewListSC>
    <ButtonViewList onClick={()=> props.handleIconClick("wrap")}>
      <i className="fas fa-th-large" />
    </ButtonViewList>
    <ButtonViewList onClick={()=> props.handleIconClick("no_wrap")}>
      <i className="fas fa-ice-cream" />
    </ButtonViewList>
  </ViewListSC>
);
export default ViewList;
