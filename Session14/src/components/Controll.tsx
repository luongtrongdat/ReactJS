// import React, { Component } from 'react'
// type IntialState = {
//     user: {
//         email: string,
//         password: string
//     }
// }
// type IntialState = {
//     user :
// }
// export default class Controll extends Component<{}, IntialState> {
//     constructor(props: {}) {
//     super(props);
//     this.state = {
//         user: {
//             email: "",
//             password: ""
//         }
//     }
//     handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(this.state.user);
//         // gửi dữ liệu lên server
//         this.setState({
//             user: {
//                 email: "",
//                 password: ""
//             }
//         })
//     }
//     handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         console.log("giá trị name", event.target.name);
//         const { name, value } = event.target;
//         this.setState({
//             user: {
//                 ...this.state.user,
//                 [name]: value
//             }
//         });
//     }
//   render() {
//     return (
//       <div>
//         Form dùng kỹ thuật Controll
//         <form action="" onSubmit={this.handleSubmit}>
//             <label htmlFor="">Email</label>
//             <input type="text" onChange={this.handleChange} name="email" />
//             <br />
//             <label htmlFor="">Password</label>
//             <input type="text" onChange={this.handleChange} name="password" />
//             <br />
//         </form>
//       </div>
//     )
//   }
// }
