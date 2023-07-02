import { Dialog, Button,DialogActions, DialogTitle } from '@mui/material'
import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {ClearAction} from "../Store/index"
import { DrawerAction,ViewAction } from '../Store'
import { useNavigate,Form } from 'react-router-dom'
const ClearForm = () => {
    const openClearForm =useSelector(state =>state.clearForm.open);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submithandler =(event)=>{
      event.preventDefault()
      fetch('http://localhost:3001/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                dispatch(ClearAction.toggle())
                dispatch(DrawerAction.toggle())
                dispatch(ViewAction.setArraytoZero())
                dispatch(ViewAction.toggle())
                navigate('/')
              })
    }
  return (
    <>
     <Dialog open={openClearForm} onClose={()=> dispatch(ClearAction.toggle())}>
        <DialogTitle>Are you sure you want to delete all Interviews ?</DialogTitle>
        <DialogActions>
          <Form onSubmit={submithandler}>
            <Button color='secondary' onClick={()=> dispatch(ClearAction.toggle())}>Cancel</Button>
            <Button type='submit' color='error'>
              Delete All</Button>
              </Form>
        </DialogActions>
     </Dialog>
    </>
  )
}

export default ClearForm
