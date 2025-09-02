import React,{ useState} from 'react'
type State={
    name:string;
    email:string;
}
export default function EX02() {
    const [user,setUser]=useState<State>({name:"",email:""});
    const [chesk,setCheck]=useState<boolean>(false);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
         setUser({...user,[name]:value})
       
    }
 const handleDisplay=()=>{
    setCheck(true)
 }
  return (
    <div>
           <h3>thong tin nguoi dung</h3>
           <input type="text" name='name' onChange={handleChange}/> <br />
           <input type="text" name='email' onChange={handleChange}/><br/>
            <button onClick={handleDisplay}>gui</button>
            {chesk?
            <div>
                <p>Name:{user.name}</p>
                <p>Email:{user.email}</p>
            </div>:""

}
    </div>
  )
}