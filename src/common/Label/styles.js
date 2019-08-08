import styled from "styled-components";
import {primaryColor} from "../../styles/constants";

const LabelSC = styled.div`
  color: ${props => props.color === 'primaryColor' ? `${primaryColor}` : 'inherit' } ;
  display: flex;
  align-items: baseline;
  font-size: ${props => (props.sizeInherit ? "inherit" : "32px")};
  text-transform: uppercase;
`;

const ThickText = styled.span`
  font-family: "Helvetica Neue - Condensed Black", Arial, sans-serif;
`;

const ThinText = styled.span`
  font-family: "Helvetica Neue - Thin", Arial, sans-serif;
`;

export { LabelSC, ThickText, ThinText };
