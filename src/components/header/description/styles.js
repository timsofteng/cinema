import styled from "styled-components";

import { secondaryColor } from "../../../styles/constants";

const DesctiptionSC = styled.div`
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: ${secondaryColor};
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSC = styled.div`
  /* Style for "The Jungle" */
  font-family: "Helvetica Neue - Bold", Arial, sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  /* Text style for "T, he Jung" */
  letter-spacing: 2px;
`;

const GenreAndDurationSC = styled.div`
  display: flex;
`;

const RaitingSC = styled.div`
  margin-top: 1em;
`;

export { DesctiptionSC, TitleSC, GenreAndDurationSC, RaitingSC };
