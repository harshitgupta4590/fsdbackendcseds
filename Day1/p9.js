const fs = require('fs');

fs.unlink('./mydir/data.txt',(err)=>{
    if(err) throw err;
    else
    console.log("Directory created")
})
