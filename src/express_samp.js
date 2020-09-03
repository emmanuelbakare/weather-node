const express = require('express')
const path = require('path')
const app=express()
public_dir=path.join(__dirname,'public')
console.log(public_dir);

app.use(express.static(public_dir))
app.listen(3000, ()=> console.log('Webserver started on port 3000'))

// app.get('', (req, resp)=>{
//     resp.send("<h1> Welcome Home")
// })

// app.get('/about', (req,resp)=>{
//     resp.send('<h1> About us Page </h2>')
// })



// app.listen(3000,()=>{
//     console.log('server up on port 3000')
// })

