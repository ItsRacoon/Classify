const express=require('express')
const {authenticate,authorize}=require('../middlewares/auth')
const Class=require('../models/class')

const router=express.Router();

router.post('/create',async(req,res)=>{
    const {subject,teacher,time,students,link}=req.body;
    try{
        const newClass=new Class({
            subject,
            teacher,
            time,
            students,
            link,
        });
        await newClass.save();
        res.status(201).json({message:'Class created successfully,class:newClass'})
    }catch(error){
        res.status(500).json({message:'Server error',error:error.message})
    }
})

router.patch('/update/:id',authenticate,authorize(['admin','teacher']),async(req,res)=>{
    const {id}=req.params;
    try{
        const updatedClass=await Class.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedClass){
            return res.status(404).json({message:'Class not found'})
        }
        res.status(200).json({message:'Class updated successfully',class:updatedClass});
    }catch(error){
        res.status(500).json({message:'Server error',error:error.message})
    }
})

router.delete('/delete/:id',authenticate,authorize(['admin','teacher']),async(req,res)=>{
    const {id}=req.params;
    try{
        const deletedClass=await Class.findByIdAndDelete(id);
        if(!deletedClass){
            return res.status(404).json({message:'Class not found'})
        }
        res.status(200).json({message:'Class deleted successfully'});
    }catch(error){
        res.status(500).json({message:'Server error',error:error.message})
    }
})

router.get('/all',authenticate,authorize(['student']),async(req,res)=>{
    try{
        const classes=await Class.find().populate('teacher students','name email');
        res.status(200).json(classes);
    }catch(error){
        res.status(500).json({message:'Server error',error:error.message})
    }
})

module.exports=router;