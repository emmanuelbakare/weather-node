const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app=express()

//set path for where public directory will be 
// all things under the publi_path will be avaiable to user
// you can put your images, css, js, and index.html file where
public_path=path.join(__dirname,'../public')


// specify you want to use views engine, where you store your html or hbs files 
// you should create folder views in the root directroy of your app
app.set('view engine', 'hbs') 

// to store your views folder under template folder
// create the folder and and then set it as the views folder parent. 
views_path=path.join(__dirname,'../templates/views')
app.set('views', views_path)

partials_path=path.join(__dirname,'../templates/partials')


console.log(public_path);
console.log(views_path);
console.log(partials_path);





app.use(express.static(public_path))

hbs.registerPartials(partials_path)



// app.set('view engine', 'html')
// app.engine('html',require('hbs'.__express))



app.get('', (req, resp)=>{
    resp.render('index',{
        title:"HBS Dynamics",
        content:'thank you for coming'
    })
})

app.get('/about', (req, resp)=>{
    resp.render('about',{
        title:"About ICL",
        content:'Interface Connect Limited'
    })
})
 
 
 app.get('/products', (req,resp)=>{
     query=req.query

    if(JSON.stringify(query)=="{}"){
        console.log('no query')
        return resp.send( {
            error: "No Identified Query Parameter"
        })
    }  
        console.log(query)
        resp.send(query)

    
   

    
    
   
     
 })

 
app.get("/about/*", (req,resp)=>{
    resp.render('404', {
        errorMsg: 'About Page Content not Found',
    })
})

app.get("*", (req,resp)=>{
    resp.render('404', {
        errorMsg: 'Page not Found',
    })
})

app.listen(3030,()=>{
    console.log("Server Active on port 3030")
})
