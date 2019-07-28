import React from 'react';
import './stylesHeader.scss';
import Label from './Label';
import Authorization from './Authorization';
import Description from './description/Description';
import Options from './Options';

const Header = () => {
    return (
        <div className="header">
            <div className="top-bar">
                <Label/>
                <Authorization/>
            </div>
            <div className="bottom-bar">
                <Description/>
                <Options />
            </div>
        </div>
    )
};

export default Header;