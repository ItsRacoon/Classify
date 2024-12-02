const mongoose=require('mongoose')
const User=require('./user')
const classSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true,
    },
    teacher:{
        type:String,
        ref:'User',
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    students:[
        {
            type:String,
            ref:'User'
        },
    ],
    link:{
        type:String,
    },
});

module.exports=mongoose.model('Class',classSchema);
