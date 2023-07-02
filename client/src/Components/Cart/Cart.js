import React ,{useEffect} from 'react'
import { Card, CardContent, Box, Typography } from '@mui/material'
import Groups3Icon from '@mui/icons-material/Groups3';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Cart = () => {
  const interviews = useLoaderData();
  useEffect(()=>{
    AOS.init({
        duration :1000
      });
},[])
  return (
    <div >
    <Box data-aos="flip-up"  data-aos-duration="2000" marginTop={'20px'} marginLeft={"20px"} width={"300px"} height={"200px"}>
    <Card>
      <CardContent>
        <Typography color='primary' variant='h6' marginTop={'4px'} textAlign={'center'}>Total Number of interview : </Typography>
      <Typography textAlign={'center'} color='gray' marginTop={'4px'} >{interviews.length}</Typography>
        <Typography marginBottom="10px" textAlign={'center'} marginTop={'4px'}><Groups3Icon  color='info' /></Typography>
      </CardContent>
    </Card>
    </Box>
    </div>
  )
}

export default Cart
