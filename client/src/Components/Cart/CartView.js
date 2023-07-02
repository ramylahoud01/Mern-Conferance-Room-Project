import React from 'react'
import { Box ,Button,Card,CardContent,Grid,Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {ViewAction} from "../Store/index"
function CartView() {
    const dispatch = useDispatch()
    const item = useSelector(state => state.view.items)
  return (
    <div>
      <Box data-aos="flip-up"  data-aos-duration="2000" marginTop={'20px'} marginLeft={"20px"} width={"800px"} maxheight={"200px"}>
    <Card>
      <CardContent>
        <Grid container spacing={5}>
            <Grid item>
                <Typography color='#FF9800' variant='h5' font-family= "Times New Roman" >View :</Typography>
            </Grid>
            <Grid item>
                <Typography color='gray' variant='p' > <Typography variant='span' color={'#FF9800'} >Id :</Typography> {item[0]._id}</Typography><br />
                <Typography  color='gray' variant='p'> <Typography variant='span' color={'#FF9800'} >Name :</Typography> {item[0].Name}</Typography><br />
                <Typography  color='gray' variant='p'> <Typography variant='span' color={'#FF9800'} >LastName :</Typography> {item[0].LastName}</Typography><br />
                <Typography  color='gray' variant='p'> <Typography variant='span' color={'#FF9800'} >PhoneNumber :</Typography> {item[0].PhoneNumber}</Typography>
            </Grid>
            <Grid item>
            <Typography color='gray' variant='p'  ><Typography variant='span' color={'#FF9800'} >Email :</Typography> {item[0].Email}</Typography><br />
            <Typography color='gray' variant='p'  ><Typography variant='span' color={'#FF9800'} >Date :</Typography> {item[0].date}</Typography><br />
            <Typography color='gray' variant='p'  ><Typography variant='span' color={'#FF9800'} >Time :</Typography> {item[0].time}</Typography><br />
            </Grid>
        </Grid>
        <Button sx={{float:"right",marginBottom:"10px"}} color='warning' variant='contained' onClick={()=>{
          dispatch(ViewAction.setArraytoZero())
        dispatch(ViewAction.toggle())
    }}>close</Button>
      </CardContent>
    </Card>
    </Box>
    </div>
  )
}

export default CartView

