import styled from "styled-components";

const ViewInfoSC = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  color: white;
  background-image: url(${props => props.src});
  background-position: top center;
  background-size: cover;
`;

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 30px;
`;
const FavoritesBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { ViewInfoSC, Backdrop, Content, FavoritesBar };
