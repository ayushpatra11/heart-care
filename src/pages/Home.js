import React from 'react';
import Heartfailure from './Heartfailure';
import Landing from './Landing';
import Symptoms from './Symptoms';

function Home() {
    return (
        <div id="Home">
            <Landing />
            <Heartfailure />
            <Symptoms />
        </div>
    )
}

export default Home
