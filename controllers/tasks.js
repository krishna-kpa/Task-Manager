const getAllTasks = (req,res)=>{
    res.send("All items listed");    
}

const createTask = (req,res)=>{
    res.json(req.body);    
}

const getTask = (req,res)=>{
    res.json({id:req.params.id,operation:"get task"});    
}

const updateTask = (req,res)=>{
    res.json({id:req.params.id,operation:"update task"});    
}

const deleteTask = (req,res)=>{
    res.json({id:req.params.id,operation:"delete task"});    
}








module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}