import React from 'react';

import '../stylesHeader.scss';
import Title from './Title';
import GenreAndDuration from './GenreAndDuration'
import Raiting from './Raiting';
import {DesctiptionSC} from "./styles";

const Description = () => {
    return (
        <DesctiptionSC>
            <Title text="the Jungle Book"/>
            <GenreAndDuration genre="Adventure Drama Family Fantasy" duration="1h 26m" />
            <Raiting/>
        </DesctiptionSC>

    )
};

export default Description;