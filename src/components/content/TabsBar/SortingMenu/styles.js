import styled from "styled-components";

const SortingMenuSC = styled.div`
  display: flex;
`;

const MenuButton = styled.div`
  margin-right: 20px;
  &:hover {
    font-family: "Helvetica Neue - Bold", Arials, sans-serif;
    cursor: pointer;
  }
  letter-spacing: 0.2px;
`;

export { SortingMenuSC, MenuButton };
