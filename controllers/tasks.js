const Task = require('../models/tasks');

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(201).json(tasks)
    } catch (error) {
        res.satus(500).json({"msg":error})
    } 
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)   
        if(!task){
            return  res.status(404).json({"msg":"Task cannot be createdr"})
        }else{
            return  res.status(201).json(task)
        } 
    } catch (error) {
        res.status(500).json({"msg":error})
    }
}

const getTask = async (req,res)=>{
    try {
        const task = await Task.findById(req.params.id)
        if(!task){
            return  res.status(404).json({"msg":"Task not found"})
        }else{
            return  res.status(201).json(task)
        }
    
   } catch (error) {
        res.status(500).json({"msg":error})
   }       
}

const updateTask = async (req,res)=>{
   try {
        const task = await Task.findByIdAndUpdate(req.params.id,{"name":req.body.name,"completed":req.body.completed || false},{
            new:true,runValidators:true
        })
        if(!task){
            return  res.status(404).json({"msg":"Task not found"})
        }else{
            return  res.status(201).json(task)
        }
    
   } catch (error) {
        res.status(500).json({"msg":error})
   }    
}

const deleteTask = async (req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return  res.status(404).json({"msg":"Task not found"})
        }else{
            return  res.status(201).json(task)
        }
       
    
   } catch (error) {
        res.status(500).json({"msg":error})
   }        
}








module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}