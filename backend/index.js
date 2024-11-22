const bodyparser = require('body-parser')
const express=require("express");
const app=express();
const stuRoute=require("../backend/routes/studentRoutes")
const cors=require("cors");
const mongoose=require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/tanudb").then(()=>{
    console.log("db connnecteddd")
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());
app.use("/students",stuRoute)




app.listen(8000,()=>{
    console.log("server on 8000 port!!!!!")
})