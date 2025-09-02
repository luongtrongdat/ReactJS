import React ,{useEffect,useState}from 'react'

export default function EX04() {
 const [value,setValue]=useState<string>("");
 const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);
 }
 useEffect(()=>{document.title=value})
  return (
    <div>
        <h4>chao mung den voi trang cua chung toi</h4>
     <input type="text" onChange={handleChange} /> 
     <p>tieu de trang de thay doi khi ban nhap truong tren</p>
    </div>
  )
}