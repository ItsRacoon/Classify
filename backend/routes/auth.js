const express=require('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../models/user');
const router=express.Router();


//SIGNUP
router.post('/register',async(req,res)=>{
    const {name,email,password,role} = req.body;
    if(!['admin','teacher','student'].includes(role)){
        return res.status(400).json({message:'Invalid role specified'})
    }
    try{
        const userExists=await User.findOne({email});
        if(userExists)return res.status(400).json({message:'User already exists'})
        const user=new User({name,email,password,role});
        await user.save();
        res.status(201).json({message:'User created successfully'})
    }catch(error){
        res.status(500).json({message:'Server error',error:error.message})
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        if (user.role === 'admin') {
            return res.status(200).json({ message: 'Login successful', token, role: user.role, redirectUrl: '/admin-dashboard' });
        } else if (user.role === 'teacher') {
            return res.status(200).json({ message: 'Login successful', token, role: user.role, redirectUrl: '/teacher-dashboard' });
        } else if (user.role === 'student') {
            return res.status(200).json({ message: 'Login successful', token, role: user.role, redirectUrl: '/student-dashboard' });
        } else {
            return res.status(400).json({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports=router;