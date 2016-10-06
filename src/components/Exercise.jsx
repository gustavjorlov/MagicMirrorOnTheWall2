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
        return (<div className="exercise_container row navbar-fixed-bottom">
            <div className="col-xs-3"></div>
            <div id="gustav" className="col-xs-2 exercise_bar" style={{"height": this.state.gustav.minutes+"px", "marginTop": (this.state.sofia.minutes-this.state.gustav.minutes)+"px"}}><p>Gustav</p></div>
            <div className="col-xs-2"></div>
            <div id="sofia" className="col-xs-2 exercise_bar" style={{"height": this.state.sofia.minutes+"px"}}><p>Sofia</p></div>
        </div>);
    }
}
