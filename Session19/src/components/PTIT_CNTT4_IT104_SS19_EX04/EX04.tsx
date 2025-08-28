import React, { useState, useEffect, use } from "react";

export default function EX04() {
    const [data, setData] = useState({name:"", emzil:""});
    const [error, setError] = useState({name:"", email:""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if(value === ""){
            setError({...error, [name]: `${name} Không được bỏ trống`});
        }else{
            setError({...error, [name]: ``});
        }

        if(value!="" && name === "email" && value.includes("@") && value.indexOf("@") !=0){
            setError({...error, email:""});
        }else{
            setError({...error, email:"Email không đúng định dạng"});
        }
        setData({...data, [name]: value});
    }

  return (
    <div>
      <h2>Form Đăng ký</h2>
      <div>
        <input type="text" name="name" placeholder="Họ tên :" onChange={handleChange}/>
        <p style={{color:"red"}}>{error.name}</p>
      </div>
      <div>
        <input type="text" name="email" placeholder="Email :" onChange={handleChange}/>
        <p style={{color:"red"}}>{error.email}</p>
      </div>
      <button>Gửi</button>
    </div>
  );
}