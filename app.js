const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require('./db/connect');
const e = require("express");
require('dotenv').config()
const port = 3000;


//middleware
app.use(express.static('./public'))
app.use(express.json());



//Routes

app.use('/api/v1/tasks',tasks);
 
const start = async ()=>{
    try{
        await connectDB(process.env.mongoURI)
        console.log("connected to DB...")
        app.listen(port,function(err){
            if(err){
                console.log("Error Occured : "+err);
            }
            else{
                console.log('Server listening on Port : '+port);
            }
        });
    }
    catch(err){
        console.log("Failed to connect to DB.. ",err)
    }
}
start()

