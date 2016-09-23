import ReactDom from 'react-dom';
import React from 'react';

import Weather from './components/Weather.jsx';
import News from './components/News.jsx';
import Exercise from './components/Exercise.jsx';
import Date from './components/Date.jsx';

class Mirror extends React.Component{
    render(){
        return (
            <div>
                <Date />
                <Weather />
            </div>
        );
    }
}

const render = () => {
    ReactDom.render(
        <Mirror />,
        document.getElementById("main")
    );
}

render();

//https://api.darksky.net/forecast/4e88566db0707cea6ea8091f3fc84377/57.9300,12.5362
//https://darksky.net/dev/account
