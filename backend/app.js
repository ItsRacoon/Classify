const express = require('express')
const connectDB=require('./db/connect')
// const Product=require("./models/products.models"); 
// const productRoute=require("./routes/product.route")
const app=express();
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}))



//routes

//HOME PAGE
app.get('/',(req,res)=>{
    res.send("Home Page")
})















const port=8000;
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);    
})

