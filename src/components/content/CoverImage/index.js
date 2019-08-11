import React from "react";
import { CoverImageSC } from "./styles";

const CoverImage = props => (
  <CoverImageSC src={props.src} alt={props.alt} />
);
export default CoverImage;
