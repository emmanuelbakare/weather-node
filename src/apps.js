const request= require('request')
const chalk=require('chalk')
const fs=require('fs')

const url="http://api.weatherstack.com/current?access_key=242c3dc8da9a4df907b5d91d79cd8903&query=45,-75&unit=f"

var poster=[]
request({url:url }, (error, response, body)=>{ 
     const data=JSON.parse(body)

    console.log('temperator today is',chalk.blue(data.current.temperature),'decree and there is ', chalk.blue(data.current.feelslike+'%'),' chance of raining today');
        //console.log(post.current);
  

})


const geocodeURL= "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW50ZXJmYWNlY29ubmVjdCIsImEiOiJja2R5YmxyYTMweDF6MnNveDl0bnF5YnFpIn0.CIHmVrtLtU5cMIXKhxiKbA&limit=1"

request({url:geocodeURL}, (error,resp,JSONbody)=>{
   body= JSON.parse(JSONbody)
   const longitude=body.features[0].center[0]
   const latitude=body.features[0].center[1]
   console.log(" Longitude : ",longitude," Latitude : "+latitude);
   
   // console.log(body.features);
})

