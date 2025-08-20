// import React, { Component } from 'react'
// type initState = {
//     name: string,
//     student: string[],
//     isLogin: boolean
// }
// export default class State extends Component<{}, initState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             name: 'Dat',
//             student:["dat", "tung", "huy"],
//             isLogin: true,
//         };
//     }
//     handleChangeName() => {
//         this.setState({name: 'Huy'});
//     }
//   render() {
//     console.log("re-render");
    
//     return (
//       <div><hr />
//         học về state
//         <p>tên svien:{this.state.name}</p>
//         <button onClick={this.handleChangeName}>changeName</button>
//         <ul>
//             {this.state.student.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//       </div>
//     )
//   }
// }
