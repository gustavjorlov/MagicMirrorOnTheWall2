var getDailySummary = function(responseBody){
    console.log(responseBody);
    var weatherData = JSON.parse(responseBody);
    console.log(Object.keys(weatherData));

    function firstUpperCase(word){
        return word[0].toUpperCase() + word.slice(1);
    }

    function getIconImage(icon_code){
        var weatherIconMap = {
            "clear-day": "Sun",
            "clear-night": "FullMoon",
            "rain": "HeavyRain",
            "snow": "Snow",
            "sleet": "Hail",
            "wind": "Tornado",
            "fog": "FogDay",
            "cloudy": "Cloud",
            "partly-cloudy-day": "PartlyCloudyDay",
            "partly-cloudy-night": "PartlyCloudyNight"
        }
        return weatherIconMap[icon_code] + ".png";
    }
    if(!weatherData){
        return {'all': 'nothing :('};
    }
    return {
        all: weatherData,
        today: {
            icon: getIconImage(weatherData.daily.data[0].icon),
            iconSummary: firstUpperCase(weatherData.daily.data[0].icon.split("-").join(" ")),
            temperature: {
                min: Math.round((weatherData.daily.data[0].apparentTemperatureMin-32)*5/9),
                minTime: (new Date(weatherData.daily.data[0].apparentTemperatureMinTime*1000)).getHours(),
                max: Math.round((weatherData.daily.data[0].apparentTemperatureMax-32)*5/9),
                maxTime: (new Date(weatherData.daily.data[0].apparentTemperatureMaxTime*1000)).getHours()
            }
        }
    };
}

module.exports = {
    getDailySummary: getDailySummary
};
