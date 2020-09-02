const request= require('request')
const fs = require('fs')
//download any number of image from the internet of size 1000x1000
imgUrl="https://picsum.photos/1000"
 

const downImage=(number=1,filenameLength=7,folder="./imgs/")=>{
    filelen=10**filenameLength
    for( let i=0; i < number; i++){
      
       let filename=folder+"IMG"+Math.floor(Math.random()*filelen)+".jpg"
       request(imgUrl).pipe(fs.createWriteStream(filename))
        console.log(filename)
    }
  
}

downImage(10,10,"../images/")
// downImage(10)      // print 10 pics at onces
// downImage()       // print only one pics ... use default data
