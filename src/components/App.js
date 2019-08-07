import React, { Fragment } from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';
import '../style.scss'

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
};

export default App;