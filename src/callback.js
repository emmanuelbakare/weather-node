// const names=['Jane', 'Lizzy','Emmy','Bose', 'Deji']

// const geocode=(address, callback)=>{

//     data={
//         lag:0,
//         long:0,
//         add:address
//     }
//     return callback(data)
// }

// geocode("The Place", (data)=>{
//     console.log(data)

// })
 

    const add=(num1,num2, callback)=>{
          return callback(num1+num2)
    }

    add(41,3,(res)=>{
        console.log(res);
    })

    path= __dirname
    filename = __filename

console.log(path)
console.log(filename)