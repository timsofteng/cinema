import React from 'react';
import '../stylesHeader.scss';

const Title = (props) => {
    return (
        <div className="title">
            {props.text}
        </div>
    )
}

export default Title;