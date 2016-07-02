import React from 'react';

export default class Exercise extends React.Component{

    constructor(){
        super();
        this.setState({
            sofia: { minutes: 1200 },
            gustav: { minutes: 4200 }
        });
    }


    render(){
        return (<h2>Exercise! {this.state.gustav}</h2>);
    }
}
