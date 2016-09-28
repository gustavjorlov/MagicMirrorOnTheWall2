import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import RegisterPresentation from './RegisterPresentation';

class RegisterContainer extends React.Component{
    constructor(){
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(){
        console.log("onSubmit");
    }
    render(){
        return (
            <RegisterPresentation onSubmit={this.onSubmit} />
        );
    }
}

ReactDOM.render(
    <RegisterContainer/>,
    document.getElementById('main')
);
