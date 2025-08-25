import React, { Component } from 'react'
type User = {
    name: string
    age: number,
    email: string
}
type State={
    user: User,
    error: string,
    checked: boolean
}
export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      user: {
        name: "",
        age: 0,
        email: ""
      },
      error: "",
      checked: false
    }
  }
  handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    this.setState({
      user: {...this.state.user, [name]:value}
    })
  }
  handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const {email}=this.state.user;
    if(!email.includes('@')) {
      this.setState({error: "Email không hợp lệ"});
    } else {
      this.setState({checked: true});
    }
  }
  render() {
    return (
      <> 
        <h3>Nhập thông tin người dùng</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Họ và tên' onChange={}/>
          <br /><br />
          <input type="email" placeholder='Email'/>
          <br /><br />
          <input type="age" placeholder='Tuổi'/>
          <br /><br />
          <button>Gửi</button>
          <button>Xóa tất cả</button>
          {this.state.checked?}
        </form>
      </>
    )
  }
}
