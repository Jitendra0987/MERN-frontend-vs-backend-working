

const express=require("express");
const route=express.Router();
const stuControler=require("../controlers/studentControlers");

route.post("/datasave",stuControler.dataSave)
route.get("/datadisplay",stuControler.dataDisplay)
route.post("/datasearch",stuControler.dataSearch)
route.get("/deletedisplay",stuControler.deleteDataDispaly)
route.post("/recorddelete",stuControler.recordDeleted)


module.exports=route;