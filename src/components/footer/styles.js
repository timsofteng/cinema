import styled from "styled-components";

const FooterSC = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.51);
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  box-sizing: border-box;
  font-family: "Helvetica Neue";
  color: #808080;
  flex-shrink: 0;
  align-items: center;
`;

const Copyright = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
export { FooterSC, Copyright };
