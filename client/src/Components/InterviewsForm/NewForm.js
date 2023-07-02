import { Dialog, DialogContent, DialogTitle, Stack,InputAdornment, TextField, Typography, Button } from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import React, { useState  } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { NewFormAction,DrawerAction } from '../Store'
import { Form,useNavigate } from 'react-router-dom'
const NewForm = () => {
    const [nameFocused, setNameFocused] = useState(false);
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [DescriptionFocused,setDescriptionFocused]=useState(false);
    const [PhoneNumberFocused,setPhoneNumberFocused]=useState(false);
    const [EmailFocused,setEmailFocused]=useState(false);
    const [DateFocused,setDateFocused]=useState(false)
    const [TimeFocused,setTimeFocused]=useState(false)
    const navigate = useNavigate()
    const openNewForm = useSelector(state => state.newForm.open);
    const dispatch = useDispatch();
    const [Name,setName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Description,setDescription]=useState("")
    const [PhoneNumber,setPhoneNumber]=useState("")
    const [Email,setEmail]=useState("")
    const [date,setDate]=useState(null)
    const [Time,setTime]=useState(null)
    const NameHandlerChange =(event)=>{
        setName(event.target.value)
    }
    const LastNameHandlerChange =(event)=>{
        setLastName(event.target.value)
    }
    const DescriptonHandlerChange =(event)=>{
        setDescription(event.target.value)
    }
    const PhoneNumberHandlerChange =(event)=>{
        setPhoneNumber(event.target.value)
    }
    const DateHandlerChange =(ChangedValue)=>{
        setDate(ChangedValue)
    }
    const TimeHandlerChange =(ChangedValue)=>{
        setTime(ChangedValue)
    }
    const changeEmailHandler =(event)=>{
        setEmail(event.target.value)
    }
    const submithandler =(event)=>{
        if (Name.trim() === '') {
            setNameFocused(true);
          }
          if (LastName.trim() === '') {
            setLastNameFocused(true);
          }
          if (Description.trim() === '') {
            setDescriptionFocused(true);
          }
          if (PhoneNumber.trim() === '') {
            setPhoneNumberFocused(true);
          }
          if (Email.trim() === '') {
            setEmailFocused(true);
          }
          if (date === null) {
            setDateFocused(true);
          }
          if (Time === null) {
            setTimeFocused(true);
          }
         console.log(date,DateFocused)

          if (
            Name.trim() !== '' &&
            LastName.trim() !== '' &&
            Email.trim() !== '' &&
            Description.trim() !== '' &&
            PhoneNumber.trim() !== '' &&
            date !== null &&
            Time !== null
          ) {
        fetch('http://localhost:3001/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name:Name,
                LastName:LastName,
                Description:Description,
                PhoneNumber:PhoneNumber,
                Email:Email,
                Date:date,
                Time:Time,
            })
          }).then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            dispatch(NewFormAction.toggle())
            dispatch(DrawerAction.toggle())
            navigate('/')
          })
        }
    }
  return (
    <>
        <Dialog open={openNewForm} onClose={()=> {
            dispatch(NewFormAction.toggle())
            }}>
            <DialogTitle textAlign={"center"} fontWeight='bold' fontFamily={'CustomFont'} bgcolor="#1976d2"  color="white">
                 New Interview :
            </DialogTitle>
            <DialogContent>
                    <Form onSubmit={submithandler}>
                            <Stack spacing={2} direction='row'>
                            <TextField  
                                onChange={NameHandlerChange} name='Name' color='primary' placeholder="Name" variant='standard'  value={Name} 
                                onFocus={() => setNameFocused(false)}
                                 error={Name.trim() === '' && nameFocused}
                                 helperText={Name.trim() === '' && nameFocused ? 'Name is required' : ''}  />
                                <TextField  
                                onChange={LastNameHandlerChange} name='LastName' color='primary' placeholder="LastName" variant='standard'  value={LastName} 
                                onFocus={() => setLastNameFocused(false)}
                                 error={LastName.trim() === '' && lastNameFocused}
                                 helperText={LastName.trim() === '' && lastNameFocused ? 'LastName is required' : ''}  />
                            </Stack>
                            <Stack spacing={2} paddingTop={3}>
                                <TextField  
                                onChange={DescriptonHandlerChange} name='Description' color='primary' placeholder="Description" variant='standard' multiline
                                rows={3} value={Description} 
                                onFocus={() => setDescriptionFocused(false)}
                                 error={Description.trim() === '' && DescriptionFocused}
                                 helperText={Description.trim() === '' && DescriptionFocused ? 'Description is required' : ''}  />
                            </Stack>
                            <Stack paddingTop={3}>
                                <TextField value={PhoneNumber}   variant='standard'
                                 onFocus={() => setPhoneNumberFocused(false)}
                                 error={PhoneNumber.trim() === '' && PhoneNumberFocused}
                                 helperText={PhoneNumber.trim() === '' && PhoneNumberFocused ? 'PhoneNumber is required' : ''}
                                color='primary' label="Phone Number" name='PhoneNumber' type='tel' size='small' InputProps={{startAdornment:
                                <InputAdornment position='start'>
                                    <Typography>+961</Typography>
                                </InputAdornment>
                            }} onChange={PhoneNumberHandlerChange}/>
                            </Stack>
                            <Stack spacing={2} paddingTop={3}>
                                <TextField variant='standard' value={Email} onChange={changeEmailHandler} type='email'  color='primary' placeholder="Email"
                                onFocus={() => setEmailFocused(false)}
                                error={Email.trim() === '' && EmailFocused}
                                helperText={Email.trim() === '' && EmailFocused ? 'Email is required' : ''}
                                 />
                            </Stack>
                            <Stack spacing={2} paddingTop={3}>
                                <DatePicker format="dd/MM/yyyy" locale="en-LB" value={date} onChange={DateHandlerChange} name='Date' label="Date" minDate={new Date()}
                                 onFocus={() => setDateFocused(false)}
                                 error={date === null && DateFocused}
                                 />
                            </Stack>
                            {date === null && DateFocused ? <Typography variant="caption" color="error">Date is required </Typography>:''}
                            <Stack spacing={2} paddingTop={3}>
                                <TimePicker value={Time} onChange={TimeHandlerChange} format="hh:mm a" ampm={true}  name='Time' color='primary' label="Hours" 
                                 onFocus={() => setTimeFocused(false)}
                                 error={Time === null && TimeFocused}
                                 />
                            </Stack>
                            {Time === null && TimeFocused ? <Typography variant="caption" color="error">Time is required </Typography>:''}
                            <Stack spacing={2} sx={{float:"right"}} paddingTop={3} direction='row'>
                                <Button type='button' variant='contained' onClick={()=> dispatch(NewFormAction.toggle())}>Cancel</Button>
                                <Button type="submit"variant='contained'>Submit</Button>
                            </Stack>
                    </Form>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default NewForm


//last interview with countdown