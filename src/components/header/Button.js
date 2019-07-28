import React from 'react';
import './stylesHeader.scss'

const Button = (props) => {
    return(
        <div>
            <button
                className={`btn ${props.type} ${props.border}`}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button;