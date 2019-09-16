import styled from "styled-components";

const SortingMenuSC = styled.div`
  display: flex;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: transparent;
  margin-right: 20px;
  &:hover {
    font-family: "Helvetica Neue - Bold", Arials, sans-serif;
    cursor: pointer;
  }
  letter-spacing: 0.2px;
  color: ${props => (props.shadowTab ? "black": "inherit")};
  font-family: ${props => (props.shadowTab ?  "Helvetica Neue - Bold": "inherit")};
`;

export { SortingMenuSC, MenuButton };
