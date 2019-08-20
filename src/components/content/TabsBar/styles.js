import styled from "styled-components";
import { primaryColor, contentTabsBarColor } from "../../../styles/constants";

const TabsBarSC = styled.div`
  color: ${primaryColor};
  font-size: 18px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 0.6em;
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.05em;
   border-bottom: 1px solid ${contentTabsBarColor}10;
`;

export { TabsBarSC };