// import React, { Component } from 'react'
// type Task = {
//     id: number,
//     task: string,
//     completed: boolean
// }
// type instaialState = {
//     todos: Task[],
// }
// export default class Event extends Component<{}, instaialState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             todos: [
//                 { id: 1, task: 'học js', completed: false },
//                 { id: 2, task: 'học c', completed: false },
//                 { id: 3, task: 'học html', completed: false },
//             ],
//         }
//     }
//     deleteTask = () => {
//         console.log("da click vao ham");
//         let new_todos = this.state.todos.filter((item) => item.id != id );
//         this.setState({todos: new_todos});
//     }
//     handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         console.log("nhan duoc su kien thay doi input", e.target.value);
//         // this.setState({todos: e.target.value});
//     }
//     addTodo() => {
//         if
//     }
//   render() {
//     return (
//       <div>
//         <h1>Danh sach cong viec can làm</h1>
//         <ul>
//             {this.state.todos.map(() => (
//                 return <>
//                     <li key={(index)}>ten công việc: {item.task}</li>
//                     <button onClick={()}></button>
//                 </>
//             ))}
//         </ul>
//       </div>
//     )
//   }
// }
