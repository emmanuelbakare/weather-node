const request = require('request');
const chalk = require('chalk');


// const long=45; 
// const lat=-75
const forecast=(lat, long, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=242c3dc8da9a4df907b5d91d79cd8903&query=${lat},${long}&unit=f`

    request({url:url}, (error, data, body)=>{
     //   dataJSON=JSON.parse(body)
        if(error){
            callback("There is an error", undefined)
        }else {
            data=JSON.parse(body)
            callback(undefined, {
                temperature:data.current.temperature,
                fellslike:data.current.feelslike
            }) 
            
        }

    })
}

module.exports=forecast
 