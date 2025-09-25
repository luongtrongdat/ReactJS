import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./slices/userSlice"
import task_slice from "./slices/taskSlice"
const store =configureStore({
    reducer:{
        user:user_slice,
        task:task_slice
    }
})

export default store;