import React from 'react';
import {GenreAndDurationSC} from "./styles";

const GenreAndDuration = (props) =>
        <GenreAndDurationSC>
            <div>{props.genre}</div>
            <div>|</div>
            <div>{props.duration}</div>
        </GenreAndDurationSC>

export default GenreAndDuration;