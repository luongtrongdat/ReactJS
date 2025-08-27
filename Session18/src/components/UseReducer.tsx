import React, { use, useReducer } from 'react'

export default function UseReducer() {
    const initialState={
        count:0
    };
    const countReducer=(state1: any, action: any)=>{
        console.log("action", action);
        // if(action.type =="INCREASE"){
        //     return {count: state1.count + action.payload};
        // } else if(action.type =="DECREASE"){
        //     return {count: state1.count - action.payload};     
        // return state1;
        switch(action.type){
            case "INCREASE":
                return {count: state1.count + action.payload};
            case "DECREASE":
                return {count: state1.count - action.payload};     
            default:
                return state1;
        }
    }
    const [state, dispatch]= useReducer(countReducer, initialState);
    const increase=()=>{
        dispatch({ type: "INCREASE", payload: 1 });
    } 
    const decrease=()=>{
        dispatch({ type: "DECREASE", payload: 1});
    }
  return (
    <div>
        <h1>Use Reducer</h1>
        <p>Gia tri count: {state.count}</p>
        <button onClick={increase}>tang</button>
        <button onClick={decrease}>giam</button>
    </div>
  )
}
