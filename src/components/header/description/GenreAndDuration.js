import React from 'react';

const GenreAndDuration = (props) => {
    return(
        <div className="genre-and-duration">
            <div>{props.genre}</div>
            <div>|</div>
            <div>{props.duration}</div>
        </div>
    )
}

export default GenreAndDuration;