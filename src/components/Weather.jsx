import React from 'react';
import $ from 'jquery';

export default class Weather extends React.Component{
    constructor(){
        super();
        console.log("constructor");
    }
    componentDidMount(){
        $.ajax("/weather", {
            success: function(response, status){
                console.log(response);
            },
            error: function(){
                console.log(":()");
            }
        });
    }
    render(){
        return (<h2>Weather!</h2>);
    }
}
