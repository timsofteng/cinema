import styled from "styled-components";

const HeaderSC = styled.div`
  background-image: url("https://i.imgur.com/7MKuGUd.jpg");
  background-size: cover;
  background-position: center center;
  height: 35%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 0px 150px 50px rgba(0, 0, 0, 0.7),
    inset 0px -150px 100px rgba(0, 0, 0, 0.7);
  flex-shrink: 0;
  color: white;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-left: 4em;
  margin-right: 4em;
  background-position: top;
  background-size: cover;
`;

const BotomBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  margin-left: 4em;
  margin-right: 4em;
    height: initial;

`;

export { HeaderSC, TopBar, BotomBar };
