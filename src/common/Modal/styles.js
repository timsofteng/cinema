import styled from "styled-components";

const ModalSC = styled.div`
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  width: auto;
  border-radius: 6px;
`;

const Background = styled.div`
top: 0;
  position: fixed;
  background-color: #000000;
  opacity: 0.6;
  height: 100%;
  width: 100%;
`;

export { ModalSC, Background };
