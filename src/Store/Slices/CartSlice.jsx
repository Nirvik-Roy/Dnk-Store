import {createSlice} from "@reduxjs/toolkit"


const cartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addElement(state,action){
           
            state.push(action.payload)
        },
        updateElement(state,action){},
        removeElement(state,action){},
    }
    
})
export const {addElement} = cartSlice.actions
export {cartSlice}; 