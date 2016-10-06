import ReactDom from 'react-dom';
import React from 'react';

import Weather from './components/Weather.jsx';
import News from './components/News.jsx';
import Exercise from './components/Exercise.jsx';
import Date from './components/Date.jsx';
import Greeting from './components/Greeting.jsx';

class Mirror extends React.Component{
    render(){
        return (
            <div className="content container">
                <div className="flex-container row">
                    <Date />
                    <div className="line-container flex-item col-xs-4">
                        <div className="line"></div>
                    </div>
                    <Weather />
                </div>
                <Exercise />
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
