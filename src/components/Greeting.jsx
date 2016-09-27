import React from 'react';

export default class Greeting extends React.Component{
    constructor(){
        super();
        this.state = {
            greeting: "hang on..."
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        const date = new Date();
        let greeting = "";
        switch (date.getHours()) {
            case 0:
                greeting = "Go to bed!";
                break;
            default:
                greeting = "I don't know what to say";
        }
        this.setState({greeting: greeting});
    }
    render(){
        return (
            <div className="greeting_box">
                <h2>{this.state.greeting}</h2>
            </div>
        );
    }
}
