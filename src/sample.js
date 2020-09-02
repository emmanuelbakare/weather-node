const request = require('request');

WeatherUrl="http://api.weatherstack.com/current?access_key=242c3dc8da9a4df907b5d91d79cd8903&query=Abuja"

request({url:WeatherUrl}, (err,request,body)=>{
    var ObjBody=JSON.parse(body)
    console.log(ObjBody.request.query," as a latitude of ", ObjBody.location.lat,
                "and a Longitude of ", ObjBody.location.lon,
                " with a temperature of ", ObjBody.current.temperature,
                " degrees and it will be ", ObjBody.current.weather_descriptions[0] )
    // console.log(ObjBody);
})

 