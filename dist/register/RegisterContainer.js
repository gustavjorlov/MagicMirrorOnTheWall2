import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import RegisterPresentation from './RegisterPresentation';

class RegisterContainer extends React.Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onPersonClicked = this.onPersonClicked.bind(this);
        this.state = {clickedButton: ""};
    }
    onSubmit(){
        console.log("onSubmit");
    }
    onPersonClicked(buttonId, b, c){
        this.setState({clickedButton: buttonId});
    }
    render(){
        return (
            <RegisterPresentation onSubmit={this.onSubmit} onPersonClicked={this.onPersonClicked} clickedButton={this.state.clickedButton} />
        );
    }
}

ReactDOM.render(
    <RegisterContainer/>,
    document.getElementById('main')
);
