const request = require('request');
const chalk = require('chalk');


const url="https://jsonplaceholder.typicode.com/users"
request(url, function(error, response,body){
   
    if(error){
        console.log(chalk.bgWhite.bold.black.bold("There is an error: The error is most Likely an internet problem "))
        // console.log(error)

    }else {
        console.log(body)
    }
})