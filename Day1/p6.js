const fs = require('fs');

const write=()=>{
    const data="I am new file"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("Error Writting File",err);
        else
        console.log("File Written Successfully");

    });
}
console.log("before Write")
Write("I am new data");
console.log("after Writing")