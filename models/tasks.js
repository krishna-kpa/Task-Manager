const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field is required"],
        maxlength:[20,"maxmimum length is 20 character"],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
});


module.exports = mongoose.model("Task",taskSchema);