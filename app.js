const express = require("express");
const app = express();



const port = 3000;

//Routes

app.get('/',(req,res)=>{
    res.send("Task Manager");
})




 



app.listen(port,function(err){
    if(err){
        console.log("Error Occured : "+err);
    }
    else{
        console.log('Server listening on Port : '+port);
    }
});