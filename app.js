const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const port =process.env.PORT
const app=express()

app.get('/',(req,res)=>{
    res.send("hiiiiiiiiii")
})

app.listen(port,()=>{
    console.log(`server running ${port}`);
})