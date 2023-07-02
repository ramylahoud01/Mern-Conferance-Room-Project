import { AppBar, IconButton, Toolbar, Avatar, Typography, Grid,Stack} from "@mui/material"
import img from "../Assets/Adcreators-logo-profile.jpg"
import img1 from "../Assets/Ramy-image.jpg"
import ListIcon from '@mui/icons-material/List';
import { useDispatch} from "react-redux";
import { DrawerAction } from "../Store";
const MainHeader = () => {
    const dispatch = useDispatch();
   

      //Click Drawer function 
      const ClickHandler =()=>{
        dispatch(DrawerAction.toggle())
      }
  return (
      <AppBar sx={{bgcolor:"white",paddingBottom:"10px"}} position="static">
            <Toolbar>
                <Grid container marginTop={'10px'}>
                    <Grid item sm={9} xs={6}>
                        <Stack direction={'row'}>
                            <Typography marginTop={'8px'}>
                            <IconButton onClick={ClickHandler} sx={{color:"black"}} >
                                <ListIcon />
                            </IconButton>
                            </Typography>
                            <img src={img} alt="Adcreators-logo-profile" style={{ Width: '150px', height: '50px' }}  />
                        </Stack>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Stack direction={'row'} >
                            <Avatar sx={{marginTop:'12px'}} src={img1} alt="My Image" />
                            <Typography sx={{fontWeight:"700",marginLeft:"12px",marginTop:"9px"}} variant="span" color={"black"}>Ramy <br/>Lahoud </Typography>
                        </Stack>
                    </Grid>
                    </Grid>
            </Toolbar>
      </AppBar>
  )
}

export default MainHeader
/*
<Grid container  columnSpacing={2}>
                    <Grid item >
                        <IconButton onClick={ClickHandler} sx={{color:"black"  ,marginTop:"7px"}} >
                            <ListIcon />
                        </IconButton>
                     </Grid>
                    <Grid item sm={10}>
                        <img src={img} alt="Adcreators-logo-profile" style={{ Width: '130px', height: '50px' }}  />
                    </Grid>
                    <Grid item  marginTop="9px" columnSpacing={2}>
                    <Avatar src={img1} alt="My Image" />
                    </Grid>
                    <Grid item sm={0} marginTop="7px">
                    <Typography sx={{fontWeight:"700"}} variant="span" color={"black"}>Ramy <br/>Lahoud </Typography>
                    </Grid>
                </Grid>
*/