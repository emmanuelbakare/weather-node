const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');


 

geocode("norway", (error,geodata)=>{
    // console.log(data)
    forecast( geodata.latitude,geodata.longitude, (error, {temperature, fellslike}={})=>{
        console.log(chalk.blue(geodata.location).toUpperCase(),
                    ': temperature today is',
                    chalk.blue(temperature),
                    'decree and there is ', 
                    chalk.blue(fellslike+'%'),
                    ' chance of raining today'
                   );
        // console.log(chalk.blue(geodata.location).toUpperCase(),
        //             ': temperature today is',
        //             chalk.blue(forecastdata.temperature),
        //             'decree and there is ', 
        //             chalk.blue(forecastdata.fellslike+'%'),
        //             ' chance of raining today'
        //            );
    }) 
}) 

