import React,{useState} from 'react'

export default function EX01() {
    const [value,setValue]=useState("");
  const  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const length=e.target.value.length
       if (length>5) {
        setValue("chuoi nhap vao nhieu hon 5 ky tu");
       }else{
        setValue("")
       }
    }
  return (
    <div>
     <h3>kiem tra do dai</h3>
     <input type="text" onChange={handleChange} />
     <p style={{color:"red"}}>{value}</p>
    </div>
  )
}