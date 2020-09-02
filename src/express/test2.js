const express = require('express');

const app=express()

app.get('',(req, resp)=>{
    resp.send('My first web page in node')
})

app.get('/about', (req, resp)=>{
    resp.send("<h1> Our About Page </h1>")
})

app.get('/help', (req, resp)=>{
    resp.send("<h1> Our Help Page </h1>")
})


app.listen(3030, ()=>{
    console.log('Server on port 3030 ')
})



 


 
