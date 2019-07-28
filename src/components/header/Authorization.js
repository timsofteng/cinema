import React from 'react';
import Button from './Button';
import './stylesHeader.scss'

const Authorization = () => {
    return (
        <div className="authorization">
            <Button type="secondary" border="hidden" text="Sign Up"/>
            <Button type="primary"  text="Sign in"/>
        </div>
    )
};

export default Authorization;