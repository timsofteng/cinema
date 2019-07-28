import React, { Fragment } from 'react';

import Header from './header/Header';
import Content from './Content/Content';
import Footer from './footer/Footer';
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