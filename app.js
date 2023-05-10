const express = require("express");
const app = express();
const tasks = require("./routes/task");


const port = 3000;


//middleware

app.use(express.json());



//Routes

app.use('/api/v1/tasks',tasks);
 



app.listen(port,function(err){
    if(err){
        console.log("Error Occured : "+err);
    }
    else{
        console.log('Server listening on Port : '+port);
    }
});