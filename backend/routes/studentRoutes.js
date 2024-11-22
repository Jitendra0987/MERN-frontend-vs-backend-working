

const express =require("express");
const route=express.Router();
const stuController=require("../controlers/studentControlers")
route.post("/datasave",stuController.datasave)
route.get("/datadisplay",stuController.dataDisplay)





module.exports=route;