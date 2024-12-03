const { Description } = require('@mui/icons-material');
const mongoose=require('mongoose');
const materialSchema=new mongoose.Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    files:[
        {
            type:String,
            required:true
        }
    ],
    description:{
        type:String,
        required:false
    },
    datePosted:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Material',materialSchema)