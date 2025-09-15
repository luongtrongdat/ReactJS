import React from 'react'
// import Ex01_2 from './components/PTIT_CNTT4_IT104_SS29_EX01+2/Ex01_2'
// import Ex03_4_5_6 from './components/PTIT_CNTT4_IT104_SS29_EX03+4+5+6/Ex03_4_5_6'
// import Ex07 from './components/PTIT_CNTT4_IT104_SS29_EX07/Ex07'
import Ex08 from './components/PTIT_CNTT4_IT104_SS29_EX08/Ex08'

export default function App() {
  return (
    <div>
      {/* <Ex01_2></Ex01_2> */}
      {/* <Ex03_4_5_6></Ex03_4_5_6> */}
      {/* <Ex07></Ex07> */}
      <Ex08></Ex08>
    </div>
  )
}




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// type User = {
//   id: number;
//   name: string;
// };
// export default function App() {
//   const [users, setUsers] = useState<any>([]);
//   const [name,setName]= useState<string>("");
//  // function lấy data
//   async function getData() {
//     let res = await axios.get("http://localhost:8080/users");
//     console.log("res", res);
//     setUsers([...res.data]);
//   }
//   // function thêm user vào database (json-server);
//   async function addNewUser(user:any){
//       let res= await axios.post("http://localhost:8080/users",user);
//   }
//   useEffect(() => {
//     getData();
//   }, []);

//   // tạo hàm thêm mới user
//   const addUser=()=>{
//       addNewUser({name:name});
//       setUsers([...users]);
//       setName("");
//   }
//   const handleChange=(e:any)=>{
//       setName(e.target.value);
//   }
//   const deleteUser=(id:number)=>{
//     console.log(id);
//     axios.delete(`http://localhost:8080/users/${id}`);
//     axios.patch(`http://localhost:8080/products/${id}`,{
//       name:"iphone5"
//     });
    
//   }
//   return (
//     <div>
//       học API
//       <h1> danh sách user</h1>
//       <input value={name} onChange={handleChange} type="text" />
//       <button onClick={addUser}>thêm user</button>
//       <ul>
//         {users.map((item: any, index: number) => {
//           return <li key={index}> {item.name}
//            <button onClick={()=>deleteUser(item.id)}>xóa</button>
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// }