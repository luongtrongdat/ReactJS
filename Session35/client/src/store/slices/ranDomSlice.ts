import { createSlice } from "@reduxjs/toolkit";


const ranDomSlice = createSlice({
    name:"ranDom",
    initialState:{
        arr : []
    },
    reducers:{
        random : (state) => {
            const number : number = Math.floor(Math.random() * 99);
            state.arr.push(number as never);
        }
    }
})

export const { random } = ranDomSlice.actions
export default ranDomSlice.reducer