import React from 'react';
import $ from 'jquery';

export default class Weather extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state = {
            today: {
                summary: "-",
                precipitation: "-",
                icon: "",
                temperature: {
                    min: "-",
                    max: "-"
                },
            }
        };
    }
    componentDidMount(){
        const getWeather = () => {
            $.ajax("/weather", { success: (response, status) => {
                this.setState(JSON.parse(response));
            }, error: function(){
                console.log(":()");
            }});
        }

        setInterval(getWeather, 4*60*60*1000); //hours*minutes*seconds*milliseconds == 4 hours
        getWeather();
    }
    render(){
        return (<div className="flex-item weather">
            <img width="75px" height="75px" src={this.state.today.icon !== "" ? "assets/weathericons/"+this.state.today.icon : "assets/weathericons/Satellite.png"} />
            <h3>{this.state.today.temperature.min + "/" + this.state.today.temperature.max} &ordm;C</h3>
        </div>);
    }
}
