import React from "react";
import { PlayButtonSC, PlayIcon } from "./styles";

const PlayButton = props => (
  <PlayButtonSC>
    <PlayIcon>
        <i className="fas fa-play" />
    </PlayIcon>
    <div>{props.text}</div>
  </PlayButtonSC>
);

export default PlayButton;
