import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { increment, reduce } from '../store/slices/counterSlice';

export default function Counter() {
    const result =useSelector((data:any)=>{
        console.log(data);
        
        return data.counter.value
    })
const dispatch =useDispatch();
    const increase =()=>{
   dispatch(increment());
    }
     const reduces =()=>{
   dispatch(reduce());
    }
  return (
    <div>
        <h1>Bài 1</h1>
        Giá trị :{result}
        <button onClick={increase}>+</button>
        <button onClick={reduces} >-</button>
    </div>
  )
}