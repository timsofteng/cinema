import React from 'react';
import {LabelSC, ThickText, ThinText} from './styles';

const Label = (props) => {
    return (
        <LabelSC size={props.size} color={props.color}>
            <ThickText>moovie</ThickText>
            <ThinText>rise</ThinText>
        </LabelSC>
    )
};

export default Label;