import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllTask= createAsyncThunk("getAllTask" ,
    async ()=>{
        try {
            const response =await axios.get("http://localhost:8080/tasks");
            
            return response.data
        } catch (error) {
            console.log(error);
            
        }
    })
 export const deleteTask =createAsyncThunk("deleteTask",async (id:number)=>{
    try {
       await axios.delete(`http://localhost:8080/tasks/${id}`)
     return id
    } catch (error) {
        console.log(error);
    }
  })
  export const check = createAsyncThunk("check",async (newTask:any)=>{

    try {
        const res =await axios.put(`http://localhost:8080/tasks/${newTask.id}`,newTask)
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
})
export const updateTask = createAsyncThunk("updateTask",async (newTask:any)=>{

    try {
        const res =await axios.put(`http://localhost:8080/tasks/${newTask.id}`,newTask)
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
})
export const addTask = createAsyncThunk("addTask", async (task: any) => {
  try {
    const res = await axios.post("http://localhost:8080/tasks", task);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

    const taskSlice =createSlice({
        name:"tasks",
        initialState:{
            tasks:[]
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(getAllTask.pending,()=>{
                console.log("dang trong qua trinh sua ly");
                
            })
            .addCase(getAllTask.fulfilled,(state,action)=>{
                console.log("lay du lieu thanh cong");
                state.tasks=action.payload
                
            })
            .addCase(getAllTask.rejected,()=>{
                console.log("lay du leu that bai");
                
            })
             .addCase(addTask.fulfilled, (state: any, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(deleteTask.fulfilled,(state,action)=>{
                state.tasks=state.tasks.filter((task:any)=>task.id !== action.payload)
            })
            .addCase(check.fulfilled,(state:any,action)=>{
                const index= state.tasks.findIndex((item:any)=>item.id==action.payload.id);
                state.tasks[index]= action.payload;
            })
            .addCase(updateTask.fulfilled,(state:any,action)=>{
                const index= state.tasks.findIndex((item:any)=>item.id==action.payload.id);
                state.tasks[index]= action.payload;
            })
        }
    })

    export default taskSlice.reducer;