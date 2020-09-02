const express = require('express');
const path = require('path');

const app=express()

var pub= path.join(__dirname,'../pub')


app.use(express.static(pub))

 

app.listen(3000, ()=>{
    console.log('App is active on port 3000')
})

console.log(pub);

 