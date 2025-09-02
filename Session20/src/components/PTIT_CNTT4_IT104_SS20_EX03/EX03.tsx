import React ,{useEffect}from 'react'

export default function EX03() {
    useEffect(()=>{console.log("componet da duoc render lan dau");
    },[])
  return (
    <div>
        <p>chao muong ban den voi ung dung cua chung toi </p>
    </div>
  )
}