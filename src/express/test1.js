const express = require('express');

const app=express()

app.get('',(req, res)=>{

    res.send('Hello Express')
})

app.get('/help', (req, resp)=>{
    resp.send({
        name:"Inteface Connect Limited",
        address:"Beside Mr. Biggs Lugbe Abuja"
    })
})

app.listen(3000, ()=>{
    console.log('server started on 3000')
})