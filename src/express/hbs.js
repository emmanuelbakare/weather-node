const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app=express()


//declare public directory 
const public_dir=path.join(__dirname, '/pub')
app.use(express.static(public_dir))

// set the view engine and create a "views" folder in the root of your app
// in views create index.hbs -
app.set('view engine', 'hbs')



app.get('', (req,resp)=>{
    resp.render('index', {
            :__dirname,
        dir:public_dir
    })
})


app.listen(3000, ()=>{
    console.log('port opend on 3000')
})