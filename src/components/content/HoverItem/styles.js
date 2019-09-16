import styled from "styled-components";

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

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

const ContentOnHover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const ScopeOnHover = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export { HoverItemSC, ContentOnHover, Backdrop, ScopeOnHover };
