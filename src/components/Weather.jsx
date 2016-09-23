import React from 'react';
import $ from 'jquery';

export default class Weather extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state = {
            today: {
                temperature: "-",
                summary: "-",
                precipitation: "-",
                icon: "-"
            }
        };
    }
    getTodaysWeather(responseBody){
        const weatherData = JSON.parse(responseBody);
        const temperature = Math.round(10*(weatherData.currently.temperature-32)*5/9)/10;
        const summary = weatherData.currently.summary;
        const precipitation = weatherData.currently.precipIntensity;
        const icon = weatherData.currently.icon;
        return {today: {
            temperature: temperature,
            summary: summary,
            precipitation: precipitation,
            icon: icon
        }};
    }
    componentDidMount(){
        $.ajax("/weather", {
            success: (response, status) => {
                this.setState(this.getTodaysWeather(response));
            },
            error: function(){
                console.log(":()");
            }
        });
    }
    render(){
        return (<div>
            <h2>{this.state.today.summary}</h2>
            <h3>{this.state.today.temperature} &ordm;C</h3>
        </div>);
    }
}
