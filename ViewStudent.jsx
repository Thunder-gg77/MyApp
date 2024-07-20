import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewStudent = () => {
  var [std,setStd]= useState ([])
  var navigate = useNavigate();
   useEffect (()=>{
   axios.get("http://localhost:3026/view")
   .then((res)=>{
    console.log(res.data);
    setStd(res.data)
   })
   .catch ((err)=>{console.log(err);
  })
  },[])

  const delValue=(id)=>{
    console.log("delete clicked",id)
    axios.delete("http://localhost:3026/remove/"+id)
    .then((res)=>{
        console.log(res)
        alert(res.data.message)
        window.location.reload(true)
  })
    .catch((err)=>console.log(err))
  };

const updateVlue =(val)=>{
  console.log("clicked",val)
  navigator('/add',{state:{val}});
};

  return (
<div>
  <br /><br />
  
<Typography variant='h3' color={"secondary"} style={{textAlign:"center"}} >
  Student Data
</Typography>

<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Roll no</TableCell>
        <TableCell>place</TableCell>
        <TableCell>Department</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {std.map((val,i)=>{
        return (
          <TableRow key={i}>
            <TableCell>{val.s_name}</TableCell>
            <TableCell>{val.s_age}</TableCell>
            <TableCell>{val.s_rollno}</TableCell>
            <TableCell>{val.s_place}</TableCell>
            <TableCell>{val.s_department}</TableCell>
            <Button 
              variant="contained"
              color="error"
              onClick={()=> {delvalue(val._id)}}>
              Delete
            </Button>&nbsp;
            <Button 
            variant="contained"
            color="sucess"
            onClick={()=>{updateVlue(val)}}
            >
              Update<TableCell></TableCell>
            </Button>
          <TableCell/>
          </TableRow>
        );
      })}
    </TableBody>
    
  </Table>
</TableContainer>
</div>
  )
}
export default ViewStudent