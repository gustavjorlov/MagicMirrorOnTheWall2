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
            time: moment().add(2, 'hours').format('LT'),
            day: moment().format('D MMM')
        };
    }
    render(){
        return (
            <div className="flex-item date col-xs-4">
                <h2>{this.state.day}</h2>
                <h3>{this.state.time}</h3>
            </div>
        );
    }
}
