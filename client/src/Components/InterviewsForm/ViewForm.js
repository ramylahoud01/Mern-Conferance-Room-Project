import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ViewsAction } from '../Store'
function ViewForm(props) {
    const openviewform = useSelector(state => state.views.openForm)
    const dispatch = useDispatch()
  return (
   <Dialog open={openviewform} onClose={()=> dispatch(ViewsAction.openviewForm())}>
    <DialogTitle>
        Views 
    </DialogTitle>
    <DialogContent>
        <DialogContentText>
            Hello world
        </DialogContentText>
    </DialogContent>
   </Dialog>
  )
}

export default ViewForm