import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

 const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++
        },
        decrement: (state, action) => {
            state.value--
        },
        custom:(state, action)=>{
            //action payload is just the param youre passing through
            state.value = state.value + action.payload
        }
    }
})

export const {increment, decrement, custom}= numberSlice.actions;

export default numberSlice.reducer;