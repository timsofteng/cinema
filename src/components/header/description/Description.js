import React from 'react';
import '../stylesHeader.scss';
import Title from './Title';
import GenreAndDuration from './GenreAndDuration'
import Raiting from './Raiting';

const Description = () => {
    return (
        <div>
            <Title text="Jungle Book"/>
            <GenreAndDuration genre="Adventure Drama Family Fantasy" duration="1h 26m" />
            <Raiting/>
        </div>

    )
};

export default Description;