const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const pub_dir = path.join(__dirname, '/pub');
app.use(express.static(pub_dir))



app.set('view engine', 'hbs')

app.get('', (req, resp)=>{
    resp.render('index',{
        name:"deji",
        title:"Manager",
        root_dir:__dirname,
        pub_dir,


    })
})

app.get('/forecast',(req, resp)=>{
    geocode("london", (error,geodata)=>{
        // console.log(data)
        // forecast( geodata.latitude,geodata.longitude, (error, {temperature, fellslike}={})=>{
        forecast( geodata.latitude,geodata.longitude, (error, forecast={})=>{

            // const result= geodata.location+': temperature today is'+temperature+'decree and there is '+fellslike+'%'+' chance of raining today'
            resp.render('forecast',{
                geodata,
                forecast,
            })
     
        }) 
    }) 
})

app.get('/weather', (req, resp)=>{
   
    const address = req.query.address;
   
    if(!address){
        return resp.send("You have to enter an address")
    }
    geocode(address, (error,geodata)=>{
            // console.log(data)
            // forecast( geodata.latitude,geodata.longitude, (error, {temperature, fellslike}={})=>{
            forecast( geodata.latitude,geodata.longitude, (error, forecast={})=>{
    
                // const result= geodata.location+': temperature today is'+temperature+'decree and there is '+fellslike+'%'+' chance of raining today'
                resp.send({
                    geodata,
                    forecast,
                })
         
            }) 
        }) 
    
})

const port=process.env.port || 3000
app.listen(port,()=>{
    console.log('Server runs on port', port)
    console.log('root dir', __dirname) 
})
 



