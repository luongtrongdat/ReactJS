import { createSlice } from "@reduxjs/toolkit";


const studentSlice =createSlice({
    name:"student",
    initialState:{
        students:[
            {
                id:1,
                name:"Minh Thu"
            },
            {
                id:2,
                name:"Yen Chi"
            }
        ],
    },
    reducers:{
      addStudent:(state,action)=>{
    
         state.students.push(action.payload)
      },
      deleteStudent: (state, action) => {
  return {
    ...state,
    students: state.students.filter((item) => item.id !== action.payload.id),
  };
}

    },
})
export const {deleteStudent}=studentSlice.actions;
export const {addStudent}=studentSlice.actions;
export default studentSlice.reducer;