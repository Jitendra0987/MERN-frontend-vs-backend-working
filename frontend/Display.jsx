import { useState ,useEffect } from "react";
import axios from "axios";


const Dispaly=()=>{
  const [ mydata,setMyData]=useState([]);

  const loadData=()=>{
       let api="http://localhost:8000/students/datadisplay";
       axios.get(api).then((res)=>{
           setMyData(res.data)
           console.log(res.data)
       })
  }


useEffect(()=>{
  loadData();
},[])

const ans = mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
    </>
  )

})


    return(
      <>
      <h1> this is a display page</h1>
      <hr />

      <table>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
      </table>

  
      </>
    )
  }
  export default Dispaly;