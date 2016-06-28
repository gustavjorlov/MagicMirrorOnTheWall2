import ReactDom from 'react-dom';
import React from 'react';

import Weather from './components/Weather.jsx';
import News from './components/News.jsx';

class Mirror extends React.Component{
    render(){
        return (
            <div>
                <h1>This is it!</h1>
                <Weather />
                <News />
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
