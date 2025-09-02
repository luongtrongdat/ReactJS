import React, { useReducer } from 'react'

export default function EX07() {
    const initState = {
        count : 0,
    };
    const countReducer  = (state:any,action:any) => {
        switch(action.type){
            case "INCREASE":
                return {count:state.count + action.payload};
                case "REDUCT":
                    return {count:state.count - action.payload};
            default :
                return state;
        }
    }
    const [state,dispatch] = useReducer(countReducer,initState);
    const increase = () => {
        dispatch({type:"INCREASE",payload:1})
    }
    const reduce=()=>{
        dispatch({type:"REDUCT",payload:1})
    }
    return (
    <div>
      <p>{state.count}</p>
      <button onClick={increase}>tang</button>
      <button onClick={reduce}>giam</button>
    </div>
  )
}