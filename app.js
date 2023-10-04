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
app.get('/about',(req,res)=>{
    res.send("homedgdfgdfgdfgdfgdfgdfgdfgdgd")
})


app.get('/service',(req,res)=>{
    res.send("fgdfgdfgdfgdfgdf")
})

app.get('/contact',(req,res)=>{
    res.send("fgdfgdfgdfgdfgdf")
})
app.listen(port,()=>{
    console.log(`server running ${port}`);
})
