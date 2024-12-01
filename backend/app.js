const express = require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB=require('./db/connect')
const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin')
const teacherRoutes=require('./routes/teacher')
const studentRoutes=require('./routes/student')
const classRoutes=require('./routes/classes')
dotenv.config();
const app=express();
app.use(cors())
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}))




//routes
app.use('/api/auth',authRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/teacher', teacherRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/classes',classRoutes)
//HOME PAGE
app.get('/',(req,res)=>{
    res.send("API is running")
})









const port=8000;
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);    
})

