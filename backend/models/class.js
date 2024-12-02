const mongoose=require('mongoose')

const classSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true,
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
    ],
    link:{
        type:String,
    },
});

module.exports=mongoose.model('Class',classSchema);
