const request = require('request');


const geocode=(address,callback)=>{
    const geoURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaW50ZXJmYWNlY29ubmVjdCIsImEiOiJja2R5YmxyYTMweDF6MnNveDl0bnF5YnFpIn0.CIHmVrtLtU5cMIXKhxiKbA&limit=1';
    
    request({url:geoURL}, (error, result, body)=>{

        if(error){
            callback("There is an error in error", undefined)
        } else if (JSON.parse(body).features.length < 1 ){
            var bodyObj=JSON.parse(body)
            callback(undefined, "Location "+chalk.blue(bodyObj.query[0])+" Does not exist")

        } 
        else {
            var bodyObj=JSON.parse(body)
            callback(undefined,{
                longitude:bodyObj.features[0].center[0],
                latitude:bodyObj.features[0].center[1],
                location:bodyObj.query 
            })

        }
        
    });
}


module.exports = geocode