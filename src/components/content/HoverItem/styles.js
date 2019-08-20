import styled from "styled-components";
import { itemHoverBgColor } from "../../../styles/constants";

const HoverItemSC = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.15s linear;
`;

const ContentOnHover = styled.div`
height: 100%;
  width: 100%;
  position: absolute;
`;

const Backdrop = styled.div`
  position: absolute;
  height: 70%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

const ScopeOnHover = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 4em;
  padding-bottom: 9.5em;
`;

export { HoverItemSC, ContentOnHover, Backdrop, ScopeOnHover };
