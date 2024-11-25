import axios from "axios";
import { useState } from "react";


const Insert=()=>{

const [input ,setInput]=useState({});

   const handelInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values,[name]:value}));
   }
       

   const handelSubmit=()=>{
    let api=`http://localhost:8080/students/datasave`
    axios.post(api,input).then((res)=>{
        alert("data save!!!")
        console.log(res.data)
    })
   }


       
    return(
        <>
    <h1>Insert page</h1>

        Enter Rollno <input type="text" name="rollno" onChange={handelInput}/><br />
        Enter Name <input type="text" name="name" onChange={handelInput} /><br />
        Enter city <input type="text" name="city"onChange={handelInput} /><br />
        Enter fees <input type="text" name="fees" onChange={handelInput} /><br />
        <button onClick={handelSubmit}>Click here</button>
        </>
    )
}
export default Insert;