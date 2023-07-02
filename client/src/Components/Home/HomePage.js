import Cart from '../Cart/Cart';
import Layout from '../layout/Layout'
import NewForm from '../InterviewsForm/NewForm';
import DeleteForm from '../InterviewsForm/DeleteForm';
import ClearForm from '../InterviewsForm/ClearForm';
import InterviewTable from '../Views/InterviewTable';
import Modal from "../Modal/Modal"
import { useState } from 'react';
import { Dialog,Grid, DialogContent, DialogTitle, Stack,InputAdornment, TextField, Typography, Button, DialogActions } from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { useSelector,useDispatch } from 'react-redux'
import { updateAction,DrawerAction } from '../Store/index'
import { useNavigate } from 'react-router-dom';
import CartDate from '../Cart/CartDate';
import "./HomePage.css"
import CartView from '../Cart/CartView';
import CartCounter from '../Cart/CartCounter';
import { ViewsAction } from '../Store/index';
function HomePage() {
  const navigate =useNavigate()
  const dispatch = useDispatch();
  const [Name,setName]=useState("");
  const [LastName,setLastName]=useState("");
  const [Description,setDescription]=useState("");
  const [PhoneNumber,setPhoneNumber]=useState("");
  const [date,setDate]=useState(null);
  const [time,setTime]=useState(null);
  const [nameFocused, setNameFocused] = useState(false);
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [DescriptionFocused,setDescriptionFocused]=useState(false);
    const [PhoneNumberFocused,setPhoneNumberFocused]=useState(false);
    const [DateFocused,setDateFocused]=useState(false)
    const [TimeFocused,setTimeFocused]=useState(false)
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
const submitHandler=(event)=>{
  event.preventDefault();
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
  if (date === null) {
    setDateFocused(true);
  }
  if (time === null) {
    setTimeFocused(true);
  }
 console.log(date,DateFocused)

  if (
    Name.trim() !== '' &&
    LastName.trim() !== '' &&
    Description.trim() !== '' &&
    PhoneNumber.trim() !== '' &&
    date !== null &&
    time !== null
  ) {
  fetch(`http://localhost:3001/update/${interview._id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    Name:Name,
    LastName:LastName,
    Description:Description,
    PhoneNumber:PhoneNumber,
    Date:date,
    Time:time
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  dispatch(updateAction.toggle())
  dispatch(DrawerAction.toggle())
  navigate("/")
})
  }
}

  const openNewForm = useSelector(state => state.newForm.open)
  const openDeleteForm =useSelector(state =>state.deleteForm.open)
  const openClearForm =useSelector(state =>state.clearForm.open)
  const openUpdateForm = useSelector(state =>state.updateForm.open)
  const openView = useSelector(state => state.view.items)
  const reload =useSelector(state =>state.deleteForm.reload);
  const openviews = useSelector(state => state.views.open);
  const openviewform = useSelector(state => state.views.openForm)
  const [interview,setinterview]=useState()
  const onChangeFormhandler =(idupdated)=>{
    console.log(idupdated)
    fetch(`http://localhost:3001/view/${idupdated}`)
    .then(response =>response.json())
    .then(interview =>{
      setName(interview.interview.Name)
      setLastName(interview.interview.LastName)
      setDescription(interview.interview.Description)
      setPhoneNumber(interview.interview.PhoneNumber)
      setDate(new Date(interview.interview.Date))
      setTime(new Date(interview.interview.Time))
      setinterview(interview.interview)
    })
  }

  const [Namev,setNamev]=useState("");
  const [LastNamev,setLastNamev]=useState("");
  const [Descriptionv,setDescriptionv]=useState("");
  const [PhoneNumberv,setPhoneNumberv]=useState("");
  const [datev,setDatev]=useState(null);
  const [timev,setTimev]=useState(null);
  const [emailv,setEmailv]=useState("")

  function ClickViewHandler (interviewid){
    
    fetch(`http://localhost:3001/view/${interviewid}`,{
          method: 'Get',
          headers: {
            'Content-Type': 'application/json'
          }
          }).then(response => {
            return response.json()
          }).then((data)=>{
            setNamev(data.interview.Name)
            setLastNamev(data.interview.LastName);
            setDescriptionv(data.interview.Description);
            setPhoneNumberv(data.interview.PhoneNumber);
            setDatev(data.interview.Date);
            setTimev(data.interview.Time);
            setEmailv(data.interview.Email)
          })
        }
  
 
  return ( 
    <Layout >
      <Grid container>
        <Grid item><Cart /></Grid>
        <Grid item><CartDate /></Grid>
        <Grid><CartCounter /></Grid>
      </Grid>
      {openView.length === 1  && <Grid paddingBottom={"20px"}><CartView /></Grid>}
      <Modal onChangeForm ={onChangeFormhandler} onClickView={ClickViewHandler}/>
      {reload && <Stack sx={{textAlign:'center'}}><p>Loading...</p></Stack>}
      {openviews && <InterviewTable />}
      {openNewForm && <NewForm />}
      {openDeleteForm && <DeleteForm />}
      {openClearForm && <ClearForm />}
      {openUpdateForm && 
      <Dialog open={openUpdateForm} onClose={()=> dispatch(updateAction.toggle())}>
            <DialogTitle textAlign={"center"} fontWeight='bold' fontFamily={'CustomFont'} bgcolor="#1976d2"  color="white">
                 Update Interview :
            </DialogTitle>
            <DialogContent>
                    <form onSubmit={submitHandler}>
                            <Stack spacing={2} direction='row'>
                                <TextField  
                                onChange={NameHandlerChange} name='Name' color='primary' placeholder="Name" variant='standard'  value={Name} 
                                onFocus={() => setNameFocused(false)}
                                 error={Name.trim() === '' && nameFocused}
                                 helperText={Name.trim() === '' && nameFocused ? 'Name is required' : ''}  />
                                <TextField onChange={LastNameHandlerChange} name='LastName' color='primary' placeholder="LastName" variant='standard' value={LastName} 
                                 onFocus={() => setLastNameFocused(false)}
                                 error={LastName.trim() === '' && lastNameFocused}
                                 helperText={LastName.trim() === '' && lastNameFocused ? 'LastName is required' : ''} />
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
                                <TextField onChange={PhoneNumberHandlerChange} value={PhoneNumber} color='primary' label="Phone Number" type='tel' size='small'
                                 onFocus={() => setPhoneNumberFocused(false)}
                                 error={PhoneNumber.trim() === '' && PhoneNumberFocused}
                                 helperText={PhoneNumber.trim() === '' && PhoneNumberFocused ? 'PhoneNumber is required' : ''}
                                InputProps={{startAdornment:
                                <InputAdornment position='start'>
                                    <Typography>+961</Typography>
                                </InputAdornment>
                            }} />
                            </Stack>
                            <Stack spacing={2} paddingTop={3}>
                                <DatePicker onChange={DateHandlerChange} value={date} color='primary' label="Date" minDate={new Date()}
                                  onFocus={() => setDateFocused(false)}
                                  error={date === null && DateFocused}/>
                            </Stack>
                            {date === null && DateFocused ? <Typography variant="caption" color="error">Date is required </Typography>:''}
                            <Stack spacing={2} paddingTop={3}>
                                <TimePicker  onChange={TimeHandlerChange} value={time} color='primary' label="Hours" 
                                 onFocus={() => setTimeFocused(false)}
                                 error={time === null && TimeFocused}/>
                            </Stack>
                            {time === null && TimeFocused ? <Typography variant="caption" color="error">Time is required </Typography>:''}
                            <Stack spacing={2} sx={{float:"right"}} paddingTop={3} direction='row'>
                                <Button  variant='contained'>Cancel</Button>
                                <Button type="submit"variant='contained' >Update</Button>
                            </Stack>
                    </form>
            </DialogContent>
        </Dialog>}

        {openviewform && 
        <Dialog open={openviewform} onClose={()=> {
          setNamev("")
          setLastNamev("");
          setDescriptionv("");
          setPhoneNumberv();
          setDatev(null);
          setTimev(null);
          setEmailv("")
          dispatch(ViewsAction.openviewForm())
          
          }}>
          <DialogTitle bgcolor={'#FF9800'} color={'white'}>
            Views 
          </DialogTitle>
          <DialogContent >
            <Stack spacing={2}>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'} >Name :&nbsp;&nbsp;</Typography> <Typography color='gray'>{Namev}</Typography>
            </Stack>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'}>LastName :&nbsp;&nbsp;</Typography> <Typography color='gray'>{LastNamev}</Typography>
            </Stack>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'}>Description :&nbsp;&nbsp;</Typography> <Typography color='gray'>{Descriptionv}</Typography>
            </Stack>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'}>Email :&nbsp;&nbsp;</Typography> <Typography color='gray'>{emailv}</Typography>
            </Stack>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'}>PhoneNumber :&nbsp;&nbsp;</Typography> <Typography color='gray'>{PhoneNumberv}</Typography>
            </Stack>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'}>Date :&nbsp;&nbsp;</Typography> <Typography color='gray'>{(new Date(datev)).toLocaleString("en-US", { timeZone: "Asia/Beirut", year: "numeric", month: "2-digit", day: "2-digit", hour12: true })}</Typography>
            </Stack>
            <Stack direction={'row'}>
            <Typography fontWeight={"19px"} fontSize={'16px'} color={'#FF9800'}>Time :&nbsp;&nbsp;</Typography> <Typography color='gray'>{(new Date(timev)).getHours().toLocaleString("en-US", { timeZone: "Asia/Beirut" ,hour12: true })}:{(new Date(timev)).getMinutes().toLocaleString("en-US", { timeZone: "Asia/Beirut" ,hour12: true })}</Typography>
            </Stack>
            </Stack>
           </DialogContent>
           <DialogActions>
            <Button color='warning' onClick={()=> dispatch(ViewsAction.openviewForm())} sx={{float:"right"}}>Close</Button>
           </DialogActions>
       </Dialog>
       }
      <br />
      <br />
    </Layout>

  );
}
export default HomePage;
