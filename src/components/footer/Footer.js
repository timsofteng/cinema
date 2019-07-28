import React from 'react';
import Bar from './Bar';
import './stylesFooter.scss'

const Footer = () => {
    return(
        <div className="footer">
            <Bar/>
            <div className="copyright">
                Copyright (c) 2017
                <span className="thick-text">moovie</span>
                <span className="thin-text">rise</span>
                . All Rights Reserved.
            </div>
        </div>
    )
};

export default Footer;