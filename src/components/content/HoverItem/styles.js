import styled from "styled-components";
import { itemHoverBgColor } from "../../../styles/constants";

const HoverItemSC = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  opacity: 0;
  &:hover {
    background-color: ${itemHoverBgColor};
    opacity: 1;
  }
`;

const ScopeOnHover = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 4em;
  padding-bottom: 2em;
`;

export { HoverItemSC, ScopeOnHover };
