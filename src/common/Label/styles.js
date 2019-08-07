import styled from "styled-components";

const LabelSC = styled.div`
  color: ${props => props.color === 'blue' ? '#0aaee4': 'inherit' } ;
  display: flex;
  align-items: baseline;
  font-size: ${props => (props.size === "inherit" ? "inherit" : "32px")};
  text-transform: uppercase;
`;

const ThickText = styled.span`
  font-family: "Helvetica Neue - Condensed Black";
`;

const ThinText = styled.span`
  font-family: "Helvetica Neue - Thin";
`;

export { LabelSC, ThickText, ThinText };
