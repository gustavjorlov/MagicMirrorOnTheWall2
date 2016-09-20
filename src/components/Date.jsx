import moment from 'moment';
require('moment/locale/sv');
import React from 'react';

export default class Date extends React.Component{
    constructor(){
        super();
        moment.locale('sv');
        this.state = this.getTime();
    }
    componentDidMount(){
        setInterval(() => {
            this.setState(this.getTime());
        }, 60000);
    }
    getTime(){
        return {
            time: moment().format('LT'),
            day: moment().format('D MMM')
        };
    }
    render(){
        return (
            <div className="date_box">
                <h2>{this.state.time}</h2>
                <h3>{this.state.day}</h3>
            </div>
        );
    }
}
