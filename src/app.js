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
            <div className="content">
                <div className="flex-container">
                    <Date />
                    <div className="line flex-item"></div>
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
