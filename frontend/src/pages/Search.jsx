import { useState } from "react";
import axios from "axios";



const Search=()=>{
    const [rno,setRno]=useState("");
    const [mydata, setMydata]=useState([]);
    const [myerr, setMyerr]=useState();

const handelSubmith=()=>{
    let api=`http://localhost:8080/students/datasearch`;
     axios.post(api , {rollno:rno}).then((res)=>{
        setMydata(res.data)
              console.log(res.data)
              
     })
}


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
        <h1> Search page</h1>
        Enter Rollno : <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
        <button onClick={handelSubmith}>Search</button>
        <hr/>
        <table>
            <tr>
                <th>ROLLNO</th>
                <th>NAME</th>
                <th>CITY</th>
                <th>FEES</th>
            </tr>
            {mydata.length >=1 ? ans : <h3> no record found </h3>}
        </table>
        </>
    )
}
export default Search;