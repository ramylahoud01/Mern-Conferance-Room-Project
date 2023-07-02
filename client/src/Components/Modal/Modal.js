import { Drawer, Typography ,Box, Stack, ButtonGroup, Button, TextField, Badge} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import {useSelector,useDispatch} from "react-redux"
import { DrawerAction, } from '../Store'
import { NewFormAction } from '../Store';
import { DeleteAction } from '../Store/index'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { ClearAction } from '../Store';
import { updateAction,ViewsAction } from '../Store';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const Modal = (props) => {
    const [updatedid,setupdatedid]=useState()
    const [viewid,setviewid]=useState()
    const open = useSelector(state => state.drawer.open);
    const openidupdate = useSelector(state => state.updateForm.openid)
    const openidView = useSelector(state=> state.views.openid)
    const dispatch = useDispatch();
    const openviewform = useSelector(state => state.views.openForm)

    const changeUpdateIdHandler =(event)=>{
        setupdatedid(event.target.value);
    }
    const changeviewIdHandler=(event)=>{
        setviewid(event.target.value)
    }
    const clickhandler =(event) =>{
        event.preventDefault();
        console.log(updatedid);
        props.onChangeForm(updatedid);
        dispatch(updateAction.toggle());
    }
    const clickhandlerview=(event)=>{
        event.preventDefault();
        console.log(viewid)/*
        fetch(`http://localhost:3001/view/${viewid}`,{
          method: 'Get',
          headers: {
            'Content-Type': 'application/json'
          }
          }).then(response => {
            return response.json()
          }).then((data)=>{
            console.log(data)
          })*/
          dispatch(ViewsAction.openviewForm())
          props.onClickView(viewid)
          console.log(openviewform)
    }
  return (
    <Drawer  anchor='left' open={open} onClose={()=> dispatch(DrawerAction.toggle())}>
      <Box width={"210px"} >
        <Stack sx={{display:"flex", bgcolor:"#353039"}} p={2.5} direction={'row'}>
            <HomeIcon sx={{marginRight:"20px",color:"white"}}/>
            <Typography sx={{color:"white"}}>WELCOME</Typography>
        </Stack>
        <ButtonGroup variant='text' color='secondary' orientation='vertical'>
            <Button sx={{paddingBottom:"22px",paddingTop:"22px"}} color='warning'  startIcon={<VisibilityIcon/>} onClick={()=>{dispatch(ViewsAction.toggle())}}>
                View Interviews
            </Button>
            <Button sx={{paddingBottom:"22px",paddingTop:"22px"}} color='success'  startIcon={<AddCircleIcon />} 
            onClick={()=> dispatch(NewFormAction.toggle())}>
                New Interview
            </Button>
            <Button sx={{paddingBottom:"22px",paddingTop:"22px"}} color='error'    startIcon={<DeleteOutlineIcon/>}
            onClick={()=> dispatch(DeleteAction.toggle())}>
                Delete Interview
            </Button>


            {!openidView && 
            <Button sx={{paddingBottom:"22px",paddingTop:"22px"}} color='secondary'startIcon={<VisibilityIcon />} onClick={()=>dispatch(ViewsAction.toggleid())}>
                View Interview
            </Button>}

            <form onSubmit={clickhandlerview}>
            {openidView &&
            <Stack sx={{paddingTop:"5px",paddingRight:"7px"}}> 
            <Badge badgeContent={<CloseIcon sx={{cursor: 'pointer',color:'red'}} onClick={()=>dispatch(ViewsAction.toggleid())} />}>
                <TextField onChange={changeviewIdHandler} color='secondary'  variant='outlined'  size='small' label='Id View Interview'/></Badge>
            <Button  type='submit'>
                View
            </Button>
            </Stack>
            }
            </form>


            {!openidupdate && <Button sx={{paddingBottom:"22px",paddingTop:"22px"}} color='info'startIcon={<UpgradeIcon />} onClick={()=>dispatch(updateAction.toggleopenid())}>
                Update Interview
            </Button>}
            <form onSubmit={clickhandler}>
            {openidupdate &&
            <Stack sx={{paddingTop:"5px",paddingRight:"7px"}}> 
            <Badge badgeContent={<CloseIcon sx={{cursor: 'pointer',color:'red'}} onClick={()=>dispatch(updateAction.toggleopenid())} />}>
                <TextField onChange={changeUpdateIdHandler} color='secondary'  variant='outlined'  size='small' label='Id Updated Interview'/></Badge>
            <Button  type='submit'>
                Update
            </Button>
            </Stack>
            }
            </form>

            <Button sx={{paddingBottom:"22px",paddingTop:"22px"}} color='error'startIcon={<ClearAllIcon />}  onClick={()=>dispatch(ClearAction.toggle())}>
                Clear All Interview
            </Button>
        </ButtonGroup>
      </Box>
    </Drawer>
  )
}

export default Modal
