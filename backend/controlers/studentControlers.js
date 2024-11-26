
const stuModel = require("../models/studentModels");


const dataSave=async(req,res)=>{
     const {rollno , name, city, fees} = req.body;
     const data =await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
     })
     res.send(data)
}

const dataDisplay=async(req,res)=>{
          const myData=await stuModel.find();
          res.send(myData)
          
}

const dataSearch=async(req,res)=>{
        //  console.log("sahi chal raahha h")
        const {rollno} = req.body;
        console.log(req.body);
         const mydata=await stuModel.find({rollno:rollno})
         res.send(mydata)
}

const deleteDataDispaly=async(req,res)=>{
    const data=await stuModel. find();
    res.send(data)

}
const recordDeleted=async(req,res)=>{
    const {myid}=req.body;
     const myRes=await stuModel.findByIdAndDelete(myid)
    console.log(req.body);
    res.send("myRes");
}


module.exports={
    dataSave,
    dataDisplay,
    dataSearch,
    deleteDataDispaly,
    recordDeleted
}