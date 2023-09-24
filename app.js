const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const port =process.env.PORT
const app=express()

app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/home',(req,res)=>{
    res.send("home")
})

app.listen(port,()=>{
    console.log(`server running ${port}`);
})
