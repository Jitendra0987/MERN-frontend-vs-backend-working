

const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const cors = require("cors")
const mongoose=require("mongoose")
const stuRoute=require("./routes/studentRoutes")


mongoose.connect("mongodb://127.0.0.1:27017/deshbhakt").then(()=>{
        console.log("db connected!!!")
})


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use("/students",stuRoute);


app.listen(8080 ,()=>{
    console.log("server run  on 8080")
})


