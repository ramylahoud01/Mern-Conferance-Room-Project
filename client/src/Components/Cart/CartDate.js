import React from 'react'
import { Box ,Card,CardContent,Typography} from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import DateRangeIcon from '@mui/icons-material/DateRange';

function CartDate() {
    const interviews = useLoaderData();
    const interviewsDate = interviews.map(interview => interview.Date)
    const sortedDate = interviewsDate.sort((a, b) => new Date(a) - new Date(b));
    const minDate = sortedDate[0];
    const ClosestDate =((new Date(minDate))).toLocaleString("en-US", { timeZone: "Asia/Beirut", year: "numeric", month: "2-digit", day: "2-digit", hour12: true })
  return (
    <div>
    <Box data-aos="flip-up"  data-aos-duration="2000" marginTop={'20px'} marginLeft={"20px"} width={"300px"} height={"200px"}>
    <Card>
      <CardContent>
        <Typography color='primary' variant='h6' textAlign={'center'} marginTop='4px'>Closest Date : </Typography>
        <Typography textAlign={'center'} color='rgb(181, 181, 181)' marginTop='4px'>{ ClosestDate}</Typography>
        <Typography  textAlign={'center'} marginBottom="10px" marginTop='4px'><DateRangeIcon  color='info' /></Typography>
      </CardContent>

    </Card>
    </Box>
    </div>
  )
}

export default CartDate
