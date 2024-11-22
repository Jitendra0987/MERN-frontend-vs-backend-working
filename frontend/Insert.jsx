import { useState } from "react";
import axios from "axios";

const Insert=()=>{
  const [input, setInput]=useState({});
  

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
  }

  
  const handleSubmit=()=>{
    let api=`http://localhost:8000/students/datasave`;
    axios.post(api,input).then(()=>{
             alert("data save!!!")
    })
  }
    return(
      <>
     <h1> this is a insert page</h1>

     Enter  Rollno <input type="text" name="rollno"  onChange={handleInput}/>
     Enter  Name <input type="text" name="name"  onChange={handleInput}/>
     Enter city  <input type="text" name="city"  onChange={handleInput}/>
     Enter fees  <input type="text" name="fees"  onChange={handleInput}/>
     <button onClick={handleSubmit}>Data save</button>
      </>
    )
  }
  export default Insert;