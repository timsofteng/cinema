import React from 'react';
import './stylesHeader.scss';
import Button from './Button';

const Options = () => {
    return (
        <div className="options">
            <Button type="primary" text="Watch Now"/>
            <Button type="secondary"  text="View Info"/>
            <Button type="secondary" border="hidden" text="+ Favorites"/>
            <div>*</div>
        </div>
    )
};

export default Options;