var express = require('express');
var app = express();
var request = require('request');
var weatherAnalysis = require('./server/weatherAnalysis.js');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + "/../dist"));

console.log(__dirname + "/../dist");

app.get("/exercise", function(req, res){
    res.send("Yes!");
})

app.get("/weather", function(req, res){
    request("https://api.darksky.net/forecast/4e88566db0707cea6ea8091f3fc84377/57.9300,12.5362", function(err, response, body){
        res.send(JSON.stringify(weatherAnalysis.getDailySummary(body)));
    });
});

app.listen(app.get('port'), function(){
    console.log("Listening to " + app.get('port'));
});
