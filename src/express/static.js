const path = require('path');
const express = require('express');

const app=express()
const public_dir=path.join(__dirname,"../../public")
console.log(public_dir);


// html pages are served from this location
app.use(express.static(public_dir)) //

app.get('/help', (req,resp)=>{
    resp.send("<h1> Help for Static page </h1>")
})


app.get('/json', ()=>{

})

app.listen(3000, ()=>{
    console.log("running on port 3000")
})

