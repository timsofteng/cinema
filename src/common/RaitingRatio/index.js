import React from 'react';
import {RaitingRatioSC} from './styles'

const RaitingRatio = props =>
    <RaitingRatioSC>{props.raiting.toFixed(1)}</RaitingRatioSC>

export default RaitingRatio;