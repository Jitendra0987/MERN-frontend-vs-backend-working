import axios from "axios";
import { useState,useEffect } from "react";
import dele from "../pages/del.png";

const Delete=()=>{
    const  [mydata,setMydata]=useState([])

   const  loadData=()=>{
        let api=`http://localhost:8080/students/datadisplay`;
        axios.get(api).then((res)=>{
            setMydata(res.data)
               console.log(res.data)
        })
    }

    const myDel=async(id)=>{
        let api=`http://localhost:8080/students/recorddelete`;
        await axios.post(api,{myid:id})
        loadData()

        
      }

   
        const ans=mydata.map((key)=>{
            return(
                <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td>
                        <a href="#"   onClick={()=>{myDel(key._id)}}>
                            <img src={dele}  width="25"  height="25"  alt="" />
                        </a>
                        
                    </td>
                </tr>

                </>
            )
        })
    

    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <h1>Delete program</h1>
              <table>
                <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th> Delete</th>
                </tr>
                {ans}
              </table>


        </>
    )
}
export default Delete;