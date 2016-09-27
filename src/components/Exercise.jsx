import React from 'react';

export default class Exercise extends React.Component{

    constructor(){
        super();
        this.state = {
            sofia: { minutes: 220 },
            gustav: { minutes: 80 }
        };
    }

    render(){
        return (<div className="exercise_container">
            <div id="gustav" className="exercise_bar" style={{height: this.state.gustav.minutes+"px"}}><p>Gustav</p></div>
            <div id="sofia" className="exercise_bar" style={{height: this.state.sofia.minutes+"px"}}><p>Sofia</p></div>
        </div>);
    }
}
