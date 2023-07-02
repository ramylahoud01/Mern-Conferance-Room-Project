import {  Dialog ,DialogContent,DialogTitle, Stack, TextField,Button} from '@mui/material'
import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { DeleteAction } from '../Store/index'
import { DrawerAction } from '../Store'
import {Form,useNavigate} from "react-router-dom"
const DeleteForm = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const openDeleteForm =useSelector(state =>state.deleteForm.open);
    const [id,setId] = useState()
    
    const submitHandler = () =>{
      fetch(`http://localhost:3001/delete/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
        }).then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          dispatch(DeleteAction.toggle());
          dispatch(DrawerAction.toggle());
          navigate('/')
        })
    }
  return (
      <Dialog  open={openDeleteForm} onClose={()=> dispatch(DeleteAction.toggle())} >
        <DialogTitle color={'error'} textAlign="center">Please Enter Id :</DialogTitle>
        <DialogContent sx={{paddingLeft:"20px",paddingRight:"20px"}}>
          <Form onSubmit={submitHandler}>
            <Stack>
              <Stack sx={{paddingTop:"10px"}}>
                <TextField value={id} onChange={(event)=>{setId(event.target.value) }} color='error' label="Interview Id" variant="outlined"/>
              </Stack>
              <Stack direction={'row'} sx={{paddingTop:"20px",paddingLeft:"150px"}}>
                <Button  variant='contained' color='error' type='submit' >Delete</Button>
              </Stack>
            </Stack>
          </Form>
        </DialogContent>
      </Dialog>
  )
}

export default DeleteForm
