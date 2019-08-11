import styled from "styled-components";

import {contentTabsBarColor ,primaryColor} from "../../../../styles/constants";

const ViewListSC = styled.div`
  display: flex;
`;

const ButtonViewList = styled.button`
background-color: Transparent;
font-size: 18px;
color: ${contentTabsBarColor};
opacity: 0.15;
border: Transparent;

`;

export { ViewListSC, ButtonViewList };
