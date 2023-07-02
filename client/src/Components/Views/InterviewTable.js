import {  Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useEffect} from 'react'
import {useLoaderData} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Tooltip} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {ViewAction} from "../Store/index"
const InterviewTable = () => {
    const dispatch = useDispatch()
    const open = useSelector(state => state.view.open)
    const items = useSelector(state => state.view.items)
    const interviews = useLoaderData();
    const updatedinterviews = interviews.map(item=>({ ...item,
        Time:
        (new Date(item.Time)).toLocaleTimeString('en-US', { timeZone: 'Asia/Beirut',hour: "numeric", minute: "numeric"}),
        Date:
        ((new Date(item.Date))).toLocaleString("en-US", { timeZone: "Asia/Beirut", year: "numeric", month: "2-digit", day: "2-digit", hour12: true })
    }))
    const navigate = useNavigate();
    useEffect(()=>{
        AOS.init({
            duration :1000
          });
    },[]);

  return (
    <>
    <TableContainer style={{ overflow: 'visible' }}>
        <Table>
            <TableHead data-aos="flip-up"  sx={{bgcolor:"#2196f3"}}>
                <TableRow>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>Name</TableCell>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>LastName</TableCell>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>Description</TableCell>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>Phone Number</TableCell>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>Date</TableCell>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>Time</TableCell>
                    <TableCell sx={{textAlign:"center", fontFamily:"Open Sans" ,color:"white",fontSize:"18px"}}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody data-aos="fade-up">
                {updatedinterviews.length!==0 && updatedinterviews.map(
                    (table) =>
                    <Tooltip key={table._id} title={table._id} placement='bottom-start' enterDelay={500} leaveDelay={500} arrow> 
                    <TableRow
                    sx={{
                      '&:hover': { 
                          backgroundColor: 'rgb(180, 180, 240,0.15)',
                          borderTop:'2.5px solid rgb(195, 195, 255)',
                          borderBottom:'2.5px solid rgb(195, 195, 255)',
                        },
                    }} 
                     data-aos='fade-down' >
                        <TableCell  sx={{textAlign:"center",fontWeight:"bold",height:"50px",fontFamily:"sans-serif",color:"rgb(40, 40, 40)",fontSize:"14px"}} >{table.Name}</TableCell>
                        <TableCell  sx={{textAlign:"center",fontWeight:"bold",height:"50px",fontFamily:"sans-serif",color:"rgb(40, 40, 40)",fontSize:"14px"}}>{table.LastName}</TableCell>
                        <TableCell  sx={{textAlign:"center",maxWidth:"150px" ,height:"50px",fontWeight:"bold",fontFamily:"sans-serif",color:"rgb(40, 40, 40)",fontSize:"14px" }}>{table.Description}</TableCell>
                        <TableCell  sx={{textAlign:"center",fontWeight:"bold",height:"50px",fontFamily:"sans-serif",color:"rgb(40, 40, 40)",fontSize:"14px"}}>+961/{table.PhoneNumber}</TableCell>
                        <TableCell  sx={{textAlign:"center",fontWeight:"bold",height:"50px",fontFamily:"sans-serif",color:'rgba(25, 118, 210, 0.5)',fontSize:"14px"}}>{table.Date}</TableCell>
                        <TableCell  sx={{textAlign:"center",fontWeight:"bold",height:"50px",fontFamily:"sans-serif",color:"rgb(40, 40, 40)",fontSize:"14px"}}>{table.Time}</TableCell>
                        <TableCell  sx={{textAlign:"center"}}>
                            <ButtonGroup >
                            <Button color='error' type='button' variant='contained' onClick={()=>{
                                fetch(`http://localhost:3001/delete/${table._id}`,{method:"Delete" ,
                                headers: {
                                    'Content-Type': 'application/json'
                                  }
                                }).then(()=>navigate('/'))
                                }}>Delete</Button>
                            <Button color='warning' variant='contained' onClick={()=>{
                                console.log(open,items)
                                dispatch(ViewAction.setArraytoZero())
                                dispatch(ViewAction.additem({
                                    _id:table._id,
                                    Name:table.Name,
                                    LastName:table.LastName,
                                    PhoneNumber:table.PhoneNumber,
                                    Email:table.Email,
                                    date:table.Date,
                                    time:table.Time,
                                    Description:table.Description
                                }))
                                dispatch(ViewAction.toggle())                            
                            }}>Views</Button>
                            </ButtonGroup>
                        </TableCell>
                    </TableRow>
                    </Tooltip>
                )}
            </TableBody>
        </Table>
    </TableContainer>
    {interviews.length ===0 && <h4>No interview found</h4>}
    </>
  )
}

export default InterviewTable
