import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Box ,Card,CardContent,Typography} from '@mui/material';
import { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom"
import AvTimerTwoToneIcon from '@mui/icons-material/AvTimerTwoTone';
function CartCounter() {
  const navigate = useNavigate()
  const interviews = useLoaderData();
  //sorting the interviews 
  const sortedData = interviews.sort((a, b) => {
    // Compare the dates
    if (a.Date < b.Date) {
      return -1; // a should come before b
    } else if (a.Date > b.Date) {
      return 1; // a should come after b
    } else {
      // Dates are equal, compare the times
      if (a.Time < b.Time) {
        return -1; // a should come before b
      } else if (a.Time > b.Time) {
        return 1; // a should come after b
      } else {
        return 0; // a and b are equal
      }
    }
  });
  const interviewsT=sortedData[0]
  const [daysLeft,setDateLeft]=useState(0)
  const [hoursLeft,sethoursLeft]=useState(0);
  const [minutesLeft,setminutesLeft]=useState(0);
  const [secondLeft,setsecondLeft]=useState(0);

  useEffect(()=>{
    if(interviewsT){
    const updateCounter = () => {
      var TodayDate = new Date();
      var InterviewTime = new Date(interviewsT.Time);
      var Hours =  InterviewTime.getHours()
      var  Minutes = InterviewTime.getMinutes();
      var Seconds = InterviewTime.getSeconds()
      var InterviewDate = new Date(interviewsT.Date);
      InterviewDate.setHours(Hours)
      InterviewDate.setMinutes(Minutes);
      InterviewDate.setSeconds(Seconds);
      const diff = InterviewDate - TodayDate
      //console.log((new Date(diff)).getTime())
      
      if(((new Date(diff)).getTime()) < 0){
        fetch(`http://localhost:3001/delete/${interviewsT._id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
          }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            navigate('/')
          }).catch(error => {
            // Handle fetch error
            console.error('Fetch Error:', error);
          });
      }
      var seconds = Math.floor(diff / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      setDateLeft(days)
      sethoursLeft(hours);
      setminutesLeft(minutes);
      setsecondLeft(seconds);
    //console.log(days +"Days ," +hours%24 + ' hours, ' + minutes % 60 + ' minutes, ' + seconds % 60 + ' seconds');
    }
    const timer = setInterval(updateCounter, 1000);
    return () => clearInterval(timer);
  }else{
    setDateLeft(0);
    sethoursLeft(0);
    setminutesLeft(0);
    setsecondLeft(0);
  }
  },[interviewsT,navigate])
  

  return (
    <div>
        <Box data-aos="flip-up"  data-aos-duration="2000" marginTop={'20px'} marginLeft={"20px"} width={"300px"} height={"200px"}>
    <Card>
      <CardContent>
        <Typography color='primary' variant='h6' textAlign={'center'} marginTop='4px'>Closest Date :</Typography>
        <Typography textAlign={'center'} color='rgb(181, 181, 181)' marginTop='4px'>
       D/H/M/S :{daysLeft},{hoursLeft%24} :{minutesLeft % 60 }:{secondLeft % 60 } 
        </Typography>
        <Typography  textAlign={'center'} marginBottom="10px" marginTop='4px'><AvTimerTwoToneIcon  color='info' /></Typography>
      </CardContent>
    </Card>
    </Box>
    </div>
  )
}

export default CartCounter
