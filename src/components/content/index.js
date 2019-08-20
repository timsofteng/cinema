import React from 'react';

import TabsBar from './TabsBar'
import VideoList from './VideoList';
import {ContentMain, MovieList} from "./styles";

const Content = () => {
    return(
        <ContentMain>
            <TabsBar/>
        <MovieList>
            <VideoList />
        </MovieList>
        </ContentMain>
    )
}


export default Content;