import {createSlice,configureStore} from "@reduxjs/toolkit"

//Drawer Slice
const DrawerSlice = createSlice({
    name:"Drawer",
    initialState:{open:false},
    reducers:{
        toggle(state) {
        state.open =! state.open
        }
    }
}) 
export const DrawerAction = DrawerSlice.actions

//NewForm Slice
const NewFormSlice = createSlice({
    name:"NewForm",
    initialState:{open:false},
    reducers:{
        toggle(state){
            state.open =!state.open
        }
    }
})

export const NewFormAction = NewFormSlice.actions

const DeleteFormSlice = createSlice({
    name:"delete",
    initialState:{open:false,reload:false},
    reducers:{
        toggle(state){
            state.open =! state.open
        },
        reload(state){
            state.reload =! state.reload
        }
    }
})

export const DeleteAction = DeleteFormSlice.actions

const ClearFormSlice = createSlice({
    name:"Clear",
    initialState:{open:false},
    reducers:{
        toggle(state){
            state.open =! state.open
        }
    }
})

export const ClearAction = ClearFormSlice.actions

const updateFormSlice = createSlice({
    name:"update",
    initialState:{open:false,openid:false},
    reducers:{
        toggle(state){
            state.open =! state.open
        },
        toggleopenid(state){
            state.openid =! state.openid
        }
    }
})

export const updateAction = updateFormSlice.actions

const ViewSlice = createSlice({
    name:"view",
    initialState:{open:false,items:[]},
    reducers:{
        toggle(state){
            state.open =! state.open
        },
        additem(state,action){
            const newItem = action.payload;
            const existingid = state.items.find((item)=> item._id === newItem._id);
            if(!existingid && state.items.length === 0){
            state.items.push({
                _id:newItem._id,
                Name:newItem.Name,
                LastName:newItem.LastName,
                PhoneNumber:newItem.PhoneNumber,
                Email:newItem.Email,
                date:newItem.date,
                time:newItem.time,
                Description:newItem.Description
            })
        }
        },
        setArraytoZero(state){
            state.items.length = 0
        }    
    }
})

export const ViewAction = ViewSlice.actions

const ViewsSlice = createSlice({
    name:"views",
    initialState:{open:true,openid:false,openForm:false},
    reducers:{
        toggle(state){
           state.open =! state.open 
        },
        toggleid(state){
            state.openid =! state.openid
        },
        openviewForm(state){
            state.openForm =! state.openForm 
        }
    }
})
export const ViewsAction = ViewsSlice.actions


const store =  configureStore({
    reducer:{
    drawer:DrawerSlice.reducer,
    newForm:NewFormSlice.reducer,
    deleteForm:DeleteFormSlice.reducer,
    clearForm:ClearFormSlice.reducer,
    updateForm:updateFormSlice.reducer,
    view:ViewSlice.reducer,
    views:ViewsSlice.reducer
    }
})

export default store